# Examen pratique MDA — FormaLab (fichiers de départ)

Le projet contient des défauts volontaires. Vous devez les diagnostiquer **avant** de les corriger.
Ne remplacez pas tout le code par une application tierce. Gardez les fichiers du projet.

## Contexte
FormaLab vend des places pour des ateliers de développement web. Une place coûte **60 €** et les frais de dossier sont de **10 € par commande**, indépendamment du nombre de places.

Objectifs attendus :
- 1 place => 70 € ; 3 places => 190 € ; 5 places => 310 €.
- Les 3 ateliers contenus dans `data/ateliers.json` sont visibles après le clic sur « Charger les ateliers ».
- L'affichage est utilisable à 390 px, 768 px et sur ordinateur sans défilement horizontal imposé par la page.
- La réservation est utilisable avec **Tab**, **Maj+Tab** et **Entrée** et donne des retours compréhensibles.
- La navigation, les libellés, l'action principale et les informations d'accès sont faciles à comprendre.

## Consignes pratiques
1. Décompressez et ouvrez `atelier-reservation` dans VS Code.
2. Lancez `index.html` via un serveur HTTP local (Live Server ou `python -m http.server 8000`). Ne vous contentez pas de `file://`, car le projet utilise `fetch`.
3. Initiez Git, créez `main`, réalisez un commit de départ, puis travaillez sur une branche de correction.
4. Utilisez les outils DevTools (Elements, Console, Network et Sources) et un point d'arrêt dans VS Code ou le navigateur.
5. Corrigez le projet et documentez vos changements.
6. Créez au moins **deux commits descriptifs** après le commit initial, dont un lié au débogage et un à l'UX/accessibilité.

## Livrables pour Moodle
- Une archive `.zip` de tous les fichiers corrigés (sans dépendances ni secrets).
- Un `README.md` contenant le diagnostic : reproduction, attendu, observé, preuve, cause, correction et tests.
- Trois captures : Network avant/après correction (404 puis 200 après la même action de chargement), breakpoint montrant les valeurs utiles, rendu à 390 px.
- Un historique Git consultable : lien de dépôt GitHub **ou** fichier `historique.bundle` créé avec `git bundle create historique.bundle --all`, ainsi que le résultat de `git log --oneline` dans le README.

Le temps imparti pour cette étape est de **2 h 50**. La remise dans Moodle est comprise dans ce délai.
