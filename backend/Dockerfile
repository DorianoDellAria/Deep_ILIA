FROM python:3
WORKDIR /app
RUN pip install gunicorn

COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY . .

RUN python3 manage.py collectstatic

ENTRYPOINT [ "gunicorn", "--bind", ":8000", "backend.wsgi:application" ]
# ENTRYPOINT ["python", "manage.py", "runserver"]