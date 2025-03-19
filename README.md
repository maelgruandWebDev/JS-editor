# JS Editor - Monaco Editor

## Description

JS Editor est un éditeur de code en ligne basé sur le Monaco Editor, permettant aux utilisateurs d'écrire et d'exécuter du code JavaScript dans leur navigateur. Ce projet inclut des fonctionnalités pour capturer la sortie du `console.log`, enregistrer et charger des scripts, et offrir une interface simple pour tester du code JavaScript.

### Fonctionnalités

- Éditeur de code JavaScript utilisant Monaco Editor.
- Exécution du code JavaScript dans un environnement sécurisé avec capture de la sortie dans la section "Résultat".
- Sauvegarde du code dans un fichier `.js` sur le système local.
- Chargement de fichiers `.js` à partir du système local pour éditer ou tester le code.

## Prérequis

- Un navigateur moderne supportant JavaScript et les fonctionnalités PWA (Progressive Web App).
- Une connexion Internet pour charger Monaco Editor via un CDN.

## Installation

1. Clonez le repository :

    ```bash
    git clone https://github.com/MaelGruandWebDev/JS-editor.git
    ```

2. Ouvrez le fichier `index.html` dans votre navigateur.

## Structure du projet

- `index.html`: Fichier principal contenant le HTML et la structure de base.
- `main.js`: Script principal pour charger et configurer Monaco Editor, gérer l'exécution du code et les fonctionnalités de sauvegarde/chargement.
- `style.css`: Styles pour l'interface utilisateur.

## Utilisation

1. **Écrire du code** : Entrez votre code JavaScript dans l'éditeur Monaco.
2. **Exécuter le code** : Cliquez sur le bouton "Exécuter le code" pour exécuter le code et afficher la sortie dans la section "Résultat".
3. **Sauvegarder le script** : Cliquez sur le bouton "Sauvegarder" pour enregistrer votre code dans un fichier `.js` sur votre machine.
4. **Charger un script** : Cliquez sur le bouton "Charger" pour ouvrir un fichier `.js` existant depuis votre machine et le charger dans l'éditeur.

## Capture de la sortie du code

La sortie des commandes `console.log` et `console.error` est capturée et affichée dans la section "Résultat" sous l'éditeur, afin de fournir un retour en temps réel sur l'exécution du code.

## Fonctionnalités à venir

- Amélioration de la gestion des erreurs lors de l'exécution du code.
- Ajout de plus de langages supportés dans l'éditeur.

## Contribuer

Les contributions sont les bienvenues ! Si vous avez des idées d'amélioration ou des corrections de bugs, veuillez soumettre une pull request.

1. Fork ce repository.
2. Créez une branche (`git checkout -b feature-nouvelle-fonctionnalité`).
3. Effectuez vos modifications.
4. Committez vos changements (`git commit -am 'Ajout d'une nouvelle fonctionnalité'`).
5. Poussez la branche (`git push origin feature-nouvelle-fonctionnalité`).
6. Ouvrez une pull request.

## License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Auteurs

- **Maël Gruand** - Développeur principal - [MaelGruandWebDev](https://github.com/MaelGruandWebDev)
