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

## Fonctionnement :
### 1. Client
Lorsqu'un client souhaite déposer un livre et savoir quel éditeur est susceptible de vendre son livre, il n'a qu'à compléter le formulaire du fichier index.html et valider sa sélection. 
Des maisons d'édition correspondants à ses exigences apparaitront ensuite. 

### 2. Serveur 
Quand le questionnaire est rempli correctement et envoyé, ceci génère une requête POST au serveur. Ce dernier au regard des informations demandées, il va les comparer et à l'aide d'une requête GET renvoyer les inforations de maisons d'édition correspondantes. 

## Contenu :
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

### Réalisation du contenu : 
- Pour la partie front, 
    1. j'ai réalisé un fichier html, css et js, les deux derniers reliés au fichier html. 
    2. J'ai essayé de faire un fichier de tests afin de faire de l'intégration continue sur le front cependant, mes tests avaient toujours des bugs donc, je n'ai pas pu les conserver.
    3. J'ai déposé l'ensemble des documents au fur et à mesure sur GitHub en créant des branches suivant les modifications ajoutées. 

- Pour la partie back, j'ai réalisé plusieurs choses : 
    1. Le fichier .sql dans lequel j'ai crée ma base de données et j'ai crée deux maisons d'édition. 
    2. J'ai défini le fichier js afin de faire fonctionner la base de données et de pouvoir la récupérer avec le port = 3000
    3. Afin de stocker ma base de données et de pouvoir la relier plus tard avec mon front, j'ai défini un fichier docker-compose avec deux ports : 5432 pour la picture docker qui comporte la bdd et le port 3000 pour faire la connexion avec le serveur que j'ai activé en lançant docker et en faisant un docker-compose up. 
    4. Afin de vérifier que ma base de données était fonctionnelle, je l'ai testée sur DBeaver
    5. Pour réaliser les tests sur mon back, j'ai du créer un télécharger les fichiers package.json (npm init -y) et les fichiers package-lock.json et node_modules (npm install) afin de pouvoir faire des tests sur mes fichiers. De plus, il a fallu modifier le fichier package.json : importer les dépendances jest afin de faire fonctionner mes tests. 
    6. Afin de vérifier la fonctionnalité de mon back, j'ai fait une CI (intégration continue) avec un fichier test afin de vérifier le fonctionnement de mon fichier app.js. Pour faire cela, j'ai d'abord vérifier le fonctionnement de ma bdd (si la connexion se faisait bien) en tapant node app.js dans le terminal et en tapant http://localhost:3000/maisons dans la barre de recherche internet. Enfin, pour les tests, j'ai tapé dans le terminal npm test et comme j'ai obtenu ci-dessous ce qui signifie que mes tests sont passés et que mon programme fonctionne: 

            C:\Users\info\Desktop\school\Ensim\4e_annee\S8\DevOps\Backend_Biblinvent\serveur>npm test

        > serveur@1.0.0 test
        > jest

        PASS  ./app.test.js
        GET /maisons
            √ Doit retourner les maisons d’édition correspondant aux critères (182 ms)
            √ Doit retourner un tableau vide si aucun résultat (27 ms)

        Test Suites: 1 passed, 1 total
        Tests:       2 passed, 2 total
        Snapshots:   0 total
        Time:        1.917 s, estimated 3 s
        Ran all test suites.

    7. J'ai déposé l'ensemble des fichiers sur GitHub au fur et à mesure des modifications. 

### Perspective d'amélioration : 
- Faire fonctionner la CI : elle fonctionne mais il y a des erreurs que je n'arrive pas à régler mais qui sont sûrement dûes aux répertoires et aux chemins d'accès, comme le fait que mes fichiers de test sont dans le dossier serveur et que la CI devrait se situer dans la racine du projer. 
- Relier le back et le front afin que quand je valide mon questionnaire front, ceci me génère les maisons d'édition que je souhaite, comme ce qui se fait en interne, dans le back, dans DBeaver quand on le teste, par exemple. 
- Ajouter plus d'éditeurs afin d'avoir une génération plus complète. 

