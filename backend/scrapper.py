# from .models import Publication, User
import setup
import time
import re
from datetime import datetime
from users.models import Publication, User
from urllib.parse import urlparse
from urllib.parse import parse_qs
from bs4 import BeautifulSoup
import requests


def get_uid(orbi_url):
    """
    Returns the UID of the user from the ORBI URL.
    """
    parsed_url = urlparse(orbi_url)
    uids = parse_qs(parsed_url.query).get('uid')

    return uids[0] if uids else None


def get_user_page(base_url, uid):
    """
    Returns the user's page.
    """
    url = base_url + '?uid=' + uid
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    return soup


def get_date(links):
    """
    Returns the date of the publications.
    """
    date = []
    for link in links:
        # sleep 200ms
        time.sleep(0.2)
        response = requests.get(link)
        soup = BeautifulSoup(response.text, 'html.parser')

        # print(soup)
        date_div = soup.find(
            'div', {'class': 'col-12 col-md-3 font-weight-bold text-left text-md-right pr-0'},  string=re.compile(r'date'))
        date_div = date_div.find_next_sibling('div')

        try:
            date.append(datetime.strptime(
                date_div.text, '%d %B %Y').date())
        except ValueError:
            date.append(None)
    return date


def get_publications(user_page):
    """
    Returns the user's publications from the user's page.
    """
    publications_div = user_page.find('div',  {'id': 'publications'})

    if not publications_div:
        return []

    citations = publications_div.find_all('div', {'class': 'citation'})

    links = [citation.find_next_sibling('div').find(
        'a').get('href', '') for citation in citations]
    citations = [citation.text for citation in citations]

    date = get_date(links)

    return list(zip(citations, links, date))


def get_user_publications(orbi_url):
    """
    Scraps the publications of a user from the ORBI website.
    """
    base_url = 'https://orbi.umons.ac.be/profile'
    uid = get_uid(orbi_url)

    if not uid:
        return []

    # Get the user's page
    user_page = get_user_page(base_url, uid)

    # Get the publications
    publications = get_publications(user_page)

    return publications


def update_users_publications():
    """
    Updates the publications of all the users.
    """
    users = User.objects.all()

    for user in users:
        orbi_url = user.Orbi_url
        if not orbi_url:
            continue

        publications = get_user_publications(orbi_url)

        for Citation, Link, Date in publications:
            Publication.objects.update_or_create(
                UserId=user, Citation=Citation, Link=Link, Date=Date)


if __name__ == '__main__':
    update_users_publications()
    # sidi = get_user_publications('https://orbi.umons.ac.be/profile?uid=530391')
    # print(get_date(['https://orbi.umons.ac.be/handle/20.500.12907/42655']))
    # print([date for _, _, date in sidi])
