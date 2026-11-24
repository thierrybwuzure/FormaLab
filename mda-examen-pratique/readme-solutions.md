# Travail 1 – Analyse UX/UI Design

## A. Audit UX 

### Problème 1

Le bouton « Confirmer ma réservation » se trouve en bas de page.

Impact : L'utilisateur doit chercher le bouton et cela peut le freiner dans son élan de réservation ou le dissuader de le faire car le flow de navigation n'est pas intuitif.

Amélioration : Mettre le bouton juste en dessous du « Total »

### Problème 2

Il n'y a pas de page dédier à la réservation, et le contenu de la page est mélangé avec l'accueil client. Et le bouton n'est pas stylisé de manière à ce qu'il soit bien visible non plus et il n'a pas de hover.

Impact : Le visiteur peut se retrouver perdu, et n'est pas guidé vers la réservation. Il n'est pas non plus guidé de manière intuitive tout au long de la navigation.

Amélioration : Une option serait de créer une belle page d'accueil avec un hero comprenant un titre et un bouton CTA « Réserver » qui mène vers la page de réservation.

Deuxième option, ajouter un texte dans la section réservation qui guide l'utilisateur.

## B. Amélioration UI

  -> Voir html

# Travail 2 Accessibilité

  -> Voir html

# Travail 3

Valeur avant debug: 

- 1 : 70
- 3 : 210
- 5 : 350

Bug 1: le total est faux (mission A)

Reproduction
Je mets 3 dans « Nombre de places » et je clique sur « Calculer le total ».

Résultat attendu
190 €. 3 places à 60 € font 180 €, et on ajoute 10 € de frais, une seule fois.

Résultat observé
La page affiche 210 €. Avec 1 place c'est bon (70 €), mais avec 5 places j'ai 350 € au lieu de 310 €. Plus on prend de places, plus l'erreur grandit.

Hypothèse et preuve
Je pense que les 10 € de frais sont multipliés par le nombre de places. J'ai mis un point d'arrêt dans app.js, à la ligne 5, dans calculateTotal. Avec quantity = 3, l'expression quantity * (UNIT_PRICE + BOOKING_FEE) donne 210 et quantity * UNIT_PRICE + BOOKING_FEE donne 190 (voir ma capture). Le problème vient donc des parenthèses: elles mettent les frais dans la multiplication.

Correction
J'ai changé la ligne 5 en quantity * UNIT_PRICE + BOOKING_FEE. Maintenant les frais sont ajoutés une seule fois, à la fin.

Test de validation
Après la correction, j'ai testé: 1 place = 70 €, 3 places = 190 €, 5 places = 310 €. Je devais trouver 70, 190 et 310.