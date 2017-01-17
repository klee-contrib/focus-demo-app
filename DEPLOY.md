# Déployer la démo sur l'environnement de recette interne :
## Déployer la partie JS  (APP)

Ci-dessous les étapes à suivre afin de déployer une nouvelle version de la démo sur la recette :

1. Se connecter sur la machine de recette via ftp.
2. Accéder au répertoire **/opt/applis/apache/app**
3. Supprimer les fichiers de l'ancienne version (optionnelle)
4. Recopier les  nouveaux fichiers

## Déployer la partie serveur (API)
Ci-dessous les étapes à suivre pour déployer l'api vertigo sur la machine de recette :

1. Se connecter sur la machine de recette via putty.
2. Exécuter la commande suivante 'su root' et entrer  le mot de passe
3. Exécuter la commande suivante (afin de lister la liste des processus java en cours) :

    ```shell
    ps -A | grep java
    ```

4. Relever les identifiants des processus java
5. Arrêter tous les processus en cours java avec la commande suivante :

    ```shell
    kill -9 identifiant_du_processus
    ```

6. Se connecter sur la machine de recette via ftp.
7. Accéder au répertoire **/opt/applis/apache/api**
8. Recopier le nouveau jar de l'api vertigo
9. Lancer la nouvelle version avec la commande suivante :

    ```shell 
    java -jar nom_nouvelle_version_api_vertigo.jar > logs.txt &
    ```
    
    Si vous avez l'erreur suivante : 'bash: java: command not found',
    Veuillez rajouter le chemin vers l'installation de java à la variable PATH du système.
    Le chemin vers l'installation de java sur la machine de recette est la suivante :
    **/opt/applis/java/java**

## Point d'attention :
Lors de la génération du jar de l'api vertigo, veuillez mettre à jour les paramètres suivants:
* Chemin d'acces au fichier de logs : **/opt/data/focus/pandora/logs/pandora.log**
* dbFilePath : **/opt/data/focus/pandora/data**
* le parameter 'home' de l'elasticsearch : **/opt/data/focus/pandora/search**


## Serveur Apache 

La partie JS  et la partie API de l'application démo sont accessibles via le serveur apache qui est lancé en mode daemon.

Exécuter la commande suivante pour arrêter le serveur apache :

```shell 
service httpd stop
``` 
Exécuter la commande suivante pour démarrer le serveur apache :

```shell 
service httpd start
``` 



