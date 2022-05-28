#!/bin/bash

trap 'trap - TERM; kill -s TERM -- -$$' TERM

python manage.py makemigrations users
python manage.py migrate
if [[ "$?" != 0 ]]; then
    echo "Migration failed"
    exit 1
fi
python add_group.py
python manage.py crontab add
gunicorn --bind :8000 backend.wsgi:application &
cron &

tail -f /dev/null & wait

exit 0