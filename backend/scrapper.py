import setup
from users.models import User
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


def get_user_publications(orbi_url):
    """
    Scraps the publications of a user from the ORBI website.
    """
    base_url = 'https://orbi.umons.ac.be/profile'
    uid = get_uid(orbi_url)

    if not uid:
        return []

    # Get the user's page
    url = base_url + '?uid=' + uid
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Get the publications
    publications_div = soup.find('div',  {'id': 'publications'})

    if not publications_div:
        return []

    citations = publications_div.find_all('div', {'class': 'citation'})

    links = [citation.find_next_sibling('div').find(
        'a').get('href', '') for citation in citations]
    citations = [citation.text for citation in citations]

    return list(zip(citations, links))


def main():
    print(get_user_publications('https://orbi.umons.ac.be/profile?uid=530391'))


if __name__ == '__main__':
    main()
