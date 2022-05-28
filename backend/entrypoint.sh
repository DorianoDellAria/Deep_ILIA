#!/bin/bash

trap 'trap - TERM; kill -s TERM -- -$$' TERM

python manage.py makemigrations
python manage.py migrate
python add_group.py
python manage.py crontab add
gunicorn --bind :8000 backend.wsgi:application &
cron &

tail -f /dev/null & wait

exit 0