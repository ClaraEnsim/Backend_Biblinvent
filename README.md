# Backend_Biblinvent

## Auteur du fichier : 
Clara TOURNAY 4A IPS 

## Objectif de l'application :
Faire une application afin de générer des éditeurs susceptibles de promouvoir des livres au regard de leurs caractéristiques

## Différents éléments :
### 1. Client 
Cette section contient les fichiers concernant l'affichage et la visualisation de l'application. 
### 2. Serveur
Cette section contient les fichiers concernant le fonctionnement de l'application. 

## Fonctionnement
### 1. Client
Lorsqu'un client souhaite déposer un livre et savoir quel éditeur est susceptible de vendre son livre, il n'a qu'à compléter le formulaire du fichier index.html et valider sa sélection. 
Des maisons d'édition correspondants à ses exigences apparaitront ensuite. 

### 2. Serveur 
Quand le questionnaire est rempli correctement et envoyé, ceci génère une requête POST au serveur. Ce dernier au regard des informations demandées, il va les comparer et à l'aide d'une requête GET renvoyer les inforations de maisons d'édition correspondantes. 

## Réalisation 
### 1. Client 
- Réalisation d'un fichier index.html qui contient les éléments du questionnaire
- Réalisation d'un fichier index.css pour faire le design
- Réalisation d'un fichier index.js pour faire les dépendances, contraintes et interactions sur le site

### 2. Serveur 
- Réalisation d'un fichier DockerFile contenant les informations du serveur afin qu'il fonctionne sur Docker
- Réalisation d'un BDD init.sql dans init-db dans laquelle on stocke les informations de maisons d'édition
- Réalisation d'un fichier node afin de faire les tests
- Réalisation d'une CI afin de vérifier le fonctionnement du site 

Afin de vérifier le fonctionnement de la BDD, j'ai utilisé DBeaver et dans Docker, j'ai crée une image POSTGREY. 

