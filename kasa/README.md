<img src="src/assets/logoKasa.svg" alt="Logo de kasa" width="100"/>

![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

# Kasa 🏠🏢

Dans ce projet, je dois implémenter le front-end d’une application en utilisant React et React Router pour créer une expérience utilisateur moderne et réactive.

[Site live](https://kasa-367cc.web.app/) ⎜[Maquette Figma](https://www.figma.com/design/qEno0LwL4ZLkWyeY59kxp1/Kasa-FR-(Archived-2)?node-id=0-1) ⎜[English](#English) ⎜ [Installation](#installation)

## Description :

Je suis développeur front-end en freelance pour Kasa, une entreprise de location d’appartements entre particuliers.
Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France.

Après plus de 10 ans en ASP.NET avec un code legacy important. L’entreprise souhaite faire une refonte totale de leur site pour passer à une stack complète en JavaScript avec NodeJS côté Back-end et React côté Front-end.

## Table des matières

- [Spécifications fonctionnelles](#spécifications-fonctionnelles)
- [Spécifications techniques](#spécifications-techniques)

## Spécifications fonctionnelles :

-   Pour le défilement des photos dans la galerie (composant Carroussel) :
    -   Si l'utilisateur se trouve à la première image et qu'il clique sur "précédent", la galerie affiche la dernière image.
    -   Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "suivant", la galerie affiche la première image.
    -   S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" n'apparaissent pas.
    -   La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
-   Collapse :
    -   Par défaut, les Collapse sont fermés à l'initialisation de la page.
    -   Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
    -   Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

## Spécifications techniques :

-   Outils :
    -   Create React App.
    -   React Router.
    -   L’utilisation de Sass.
    -   Pas de librairie React externe.
-   React :
    -   Structure logique des différents fichiers.
    -   Découpage en composants modulaires et réutilisables (Un composant par fichier).
    -   Il est recommandé d’utiliser des composants fonctionnels au lieu des composants classes.
    -   Utilisation des props entre les composants.
    -   Utilisation du state dans les composants quand c'est nécessaire.
    -   Gestion des événements.
    -   Utiliser les listes autant que possible en itérant dessus (par exemple avec map).
-   React Router :
    -   La logique du routeur est réunie dans un seul fichier.
    -   Il existe une page par route.
    -   Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
    -   La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
    -   Général : Le code ne doit pas produire d'erreur ou de warning dans la console.

## Installation :

1. Cloner le repository:

-   `git clone https://github.com/ArthurBlanc/Kasa`

2. Installer toutes les dépendances pour le front-end:

-   `npm install` ou `yarn`

3. Lancer le front-end:

-   `npm start` ou `yarn start`

Le front-end sera lancé à l'URL indiqué dans le terminal.