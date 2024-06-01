<img src="src/assets/logoKasa.svg" alt="Logo de kasa" width="100"/>

![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

# Kasa 🏠🏢

Dans ce projet, je dois implémenter le front-end d’une application en utilisant React et React Router pour créer une expérience utilisateur moderne et réactive.

[Site live](https://kasa-367cc.web.app/) ⎜[Maquette Figma](https://www.figma.com/design/qEno0LwL4ZLkWyeY59kxp1/Kasa-FR-(Archived-2)?node-id=0-1) ⎜[English](#English) ⎜ [Installation](#Installation)

## Description

Je suis développeur front-end en freelance pour Kasa, une entreprise de location d’appartements entre particuliers.
Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France.

Après plus de 10 ans en ASP.NET avec un code legacy important. L’entreprise souhaite faire une refonte totale de leur site pour passer à une stack complète en JavaScript avec NodeJS côté Back-end et React côté Front-end.

## Table des matières

- [Spécifications fonctionnelles](#spécifications-fonctionnelles)
- [Spécifications techniques](#spécifications-techniques)

## Spécifications fonctionnelles

-   Pour le défilement des photos dans la galerie (composant Carroussel) :
    -   Si l'utilisateur se trouve à la première image et qu'il clique sur "précédent", la galerie affiche la dernière image.
    -   Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "suivant", la galerie affiche la première image.
    -   S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" n'apparaissent pas.
    -   La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
-   Collapse :
    -   Par défaut, les Collapse sont fermés à l'initialisation de la page.
    -   Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
    -   Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

## Spécifications techniques

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

## Installation

1. Cloner le repository:

-   `git clone https://github.com/Naofalp/kasaREACT.git`

2. Installer toutes les dépendances pour le front-end:

-   `npm install` ou `yarn`

3. Lancer le front-end:

-   `npm start` ou `yarn start`

Le front-end sera lancé à l'URL indiqué dans le terminal.

## English

Kasa 🏠🏢

In this project, I need to implement the front end of an application using React and React Router to create a modern and responsive user experience.

## Description

I am a freelance front-end developer for Kasa, a company specializing in apartment rentals between individuals. With over 500 listings posted daily, Kasa is one of the leaders in the apartment rental market in France.

After more than 10 years using ASP.NET with significant legacy code, the company wants to completely revamp their site to switch to a full JavaScript stack with NodeJS on the back end and React on the front end.

## Table of Contents

- [Functional Specifications](#functional-specifications)
- [Technical Specifications](#technical-specifications)

## Functional Specifications

- For scrolling through photos in the gallery (Carousel component):
  - If the user is on the first image and clicks "previous," the gallery displays the last image.
  - Conversely, if the displayed image is the last in the gallery, clicking "next" displays the first image.
  - If there is only one image, the "next" and "previous" buttons do not appear.
  - The gallery should always maintain the same height as indicated in the Figma mockup. Images will be cropped and centered within the image frame.
- Collapse:
  - By default, the Collapses are closed when the page initializes.
  - If the Collapse is open, clicking it will close it.
  - Conversely, if the Collapse is closed, a click will open it.

## Technical Specifications

- Tools:
  - Create React App.
  - React Router.
  - Use of Sass.
  - No external React libraries.
- React:
  - Logical structure of various files.
  - Breakdown into modular and reusable components (one component per file).
  - It is recommended to use functional components instead of class components.
  - Use props between components.
  - Use state in components when necessary.
  - Event handling.
  - Use lists as much as possible by iterating over them (e.g., with map).
- React Router:
  - Router logic is consolidated in one file.
  - There is one page per route.
  - Route parameters are managed by React Router in the URL to fetch information for each listing.
  - A 404 page is returned for any nonexistent route or if a value in the URL does not match the provided data.
  - General: The code must not produce errors or warnings in the console.

## Installation EN

1. Clone the repository:

- `git clone https://github.com/Naofalp/kasaREACT.git`

2. Install all dependencies for the front end:

- `npm install` or `yarn`

3. Launch the front end:

- `npm start` or `yarn start`

The front end will be launched at the URL specified in the terminal.
