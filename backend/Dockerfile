FROM python:3
WORKDIR /app
RUN pip install gunicorn
RUN apt update && apt install -y cron

COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY . .

RUN python3 manage.py collectstatic

ENTRYPOINT [ "bash", "entrypoint.sh" ]
# ENTRYPOINT ["python", "manage.py", "runserver"]