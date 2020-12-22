# Frontend - React

## Déroulement

### Techos utilisées

* JS/React
* Axios
* Bootstrap

### Déroulement

* Création du projet React avec create-react-app
  

* Fetch des données "Village" dans "SelectVillages" et intégration dans une liste,
  au clique les données du village selectionné sont affichées avec "ShowVillage"



* Les données sont envoyées dans une liste déroulante qui affiche plus de détails au clique (pour les villages)    
   * Problême: Je n'arrive pas à updater cette liste automatiquement à chaque requête CRUD (il faut rafraichir la page à la main)   
   Solution: Redux? (Surement pas le temps de m'y pencher)  
        

* Focus sur la gestion requêtes CRUD en priorité (avant le design etc)
    - Problême: Blocage sur la gestion des PUT/UPDATE/DELETE pendant toute l'après-midi de lundi , à force de recherche et d'essai j'ai bricolé une solution qui semble fonctionner.


* Au 22/12: Le formulaire CRUD pour le village fonctionne, il faut juste rafraichir la page après chaque requête pour voir les modifs
    * Je n'aurai sûrement pas le temps de m'occuper de la gestion des shows/villages, votes etc
    * Ni du design