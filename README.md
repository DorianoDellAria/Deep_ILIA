# Web Technologies : manuel d'installation

## Installation de Docker

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh ./get-docker.sh
```


## Build des images

```sh
docker-compose build
```

## Lancement des containers

```sh
docker-compose up -d
```

## Scrapping des publications

Dans la configuration actuelle du projet (et dans le cadre de nos tests), le scrapper est lancé toutes les 5 minutes.  
Il est cependant possible de régler le délai de lancement du scrapper en modifiant le fichier `backend/backend/settings.py`, la variable `CRONJOBS`.

```sh
CRONJOBS = [
    ('*/5 * * * *', 'users.scrapper.update_users_publications')
]
```

Pour que les articles soient récupérés, il faut fournir l'URL du profil ORBI de l'utilisateur.


