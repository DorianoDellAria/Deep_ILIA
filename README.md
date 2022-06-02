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

## Scraping des publications

Dans la configuration actuelle du projet (et dans le cadre de nos tests), le scraper est lancé toutes les 5 minutes.  
Il est cependant possible de régler le délai de lancement du scraper en modifiant le fichier `backend/backend/settings.py`, la variable `CRONJOBS`. Le format de la variable est le même que pour les cronjobs de linux.

```sh
CRONJOBS = [
    ('*/5 * * * *', 'users.scrapper.update_users_publications')
]
```

Pour que les articles soient récupérés, il faut fournir l'URL du profil ORBI de l'utilisateur.


## Application

Pour ajouter une vidéo à une application, elle doit être sur Youtube (en public on en non répertorié). Dans le champ `video_id`, il faudra fournir l'id de la vidéo et non l'URL complète.


[https://www.youtube.com/watch?v=dQw4w9WgXcQ](https://www.youtube.com/watch?v=dQw4w9WgXcQ)


Sur l'URL ci-dessus, l'ID est la chaine de caractère contenue dans la variable v : `dQw4w9WgXcQ`.

