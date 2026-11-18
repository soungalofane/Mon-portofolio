# Mandela Senghor — Digital Journey

Portfolio personnel monopage construit avec React, TypeScript et Vite. La direction artistique est une expérience illustrée en 3D animée : scène d’accueil en perspective, personnage 3D découpé, objets flottants et cartes à effet de profondeur.

## Démarrer en local

Prérequis : Node.js et npm.

Sous Windows, double-cliquer sur DEMARRER-SITE.bat. Le fichier installe les dépendances si nécessaire, démarre le serveur et ouvre le navigateur. Garder la fenêtre de commande ouverte pendant la visite.

Ne pas ouvrir index.html directement : le projet doit être servi par Vite.

Pour démarrer manuellement :

    npm install
    npm run dev

Vite affiche l’adresse locale à ouvrir dans le navigateur.

## Commandes disponibles

    npm run dev      serveur de développement
    npm run build    vérification TypeScript et version de production
    npm run preview  aperçu local de la version de production

## Contenu du portfolio

- src/data/portfolio.ts : profil, coordonnées, liens sociaux, expériences, formations, compétences et créations.
- src/pages/Home.tsx : sections du portfolio, parcours, filtres et coordonnées.
- src/components/ : navigation et fenêtre de présentation des créations.
- src/scenes/Hero.tsx : scène d’accueil illustrée, animée et sensible au mouvement du pointeur.
- src/styles/global.css : direction artistique 3D, animations, mise en page responsive et préférences de mouvement réduit.
- public/images/ : visuels du portfolio et personnage 3D illustré utilisé dans la scène d’accueil.
- public/ : icône du site et visuel de partage.

Le nom affiché, l’adresse e-mail et le téléphone ont été confirmés. Les liens Facebook, TikTok et LinkedIn viennent des profils fournis. Le parcours, les formations, les compétences et les langues sont repris du CV. Les créations présentées sont une sélection du dossier Mes créa. Le contexte, le rôle détaillé, les livrables et les résultats peuvent être ajoutés aux fiches de projets.

La ville affichée est Bamako, sans l’adresse de quartier.

## Publication

Le site est un frontend statique : aucun serveur ni formulaire avec stockage n’est configuré. Le contact passe par un lien e-mail et un lien téléphonique. La version générée par npm run build se trouve dans dist/ et peut être publiée sur un hébergeur compatible avec les sites statiques.

Avant la mise en ligne, renseigner le domaine public dans les métadonnées de partage de index.html si un aperçu social avec image est souhaité.
