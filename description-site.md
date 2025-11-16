Cahier des Charges - Site Web USK (Université du Savoir Kongo)

1. Introduction et Objectifs du Projet

Nom du Projet : Refonte et Développement du Site Institutionnel USK
Client : Université du Savoir Kongo (USK)
Objectifs Principaux :

Visibilité et Crédibilité : Projeter une image institutionnelle moderne, professionnelle et inspirante, alignée sur le slogan « Ex Scientia Lux ».

Information Efficace : Rendre l'information sur les facultés, les programmes et les conditions d'admission facilement accessible.

Acquisition (Recrutement) : Maximiser les inscriptions grâce à un parcours utilisateur (UX) clair et des appels à l'action (CTA) pertinents.

Interaction : Fournir une plateforme d'actualités (Blog) et des formulaires de contact et d'inscription fonctionnels.

2. Charte Graphique et Expérience Utilisateur (UX/UI)

2.1. Couleurs de la Marque (Basées sur le visuel fourni)

L'identité visuelle reposera sur un ancrage institutionnel (bleu foncé) et une dynamique moderne (bleu ciel), avec une couleur d'action pour les CTA.

Élément

Code HEX

Utilisation / Rôle

Primaire (Institutionnel)

#0E3360 (Bleu Marine/Encre)

Arrière-plans de l'en-tête, pieds de page, texte principal, boutons d'importance. Symbole de savoir et de rigueur.

Secondaire (Dynamique)

#27AEE4 (Bleu Ciel/Clair)

Accents graphiques (lignes, vagues), icônes, liens hypertextes, fond du logo (partiel). Apporte modernité et énergie.

Couleur d'Action (CTA)

#FFC107 (Jaune Or/Vif)

Boutons d'inscription (INSCRIVEZ-VOUS), indicateurs de sélection, éléments interactifs pour attirer l'œil. Contraste élevé.

Fond (Clarté)

#FFFFFF (Blanc)

Arrière-plan de la majorité du contenu pour une lisibilité maximale.

Texte (Contraste)

#1F2937 (Gris Foncé)

Corps du texte pour un meilleur confort de lecture.

2.2. Typographie

La typographie doit être lisible sur tous les appareils (responsive) et véhiculer un sentiment de professionnalisme.

Rôle

Police (Suggestion)

Style

Justification

Titres (H1, H2)

'Inter' ou 'Poppins' (Sans-serif)

Bold (Gras) et Semi-Bold

Clarté moderne, impact visuel fort. Utilisée pour le branding et les slogans.

Corps du Texte (Body)

'Inter' ou 'Roboto' (Sans-serif)

Regular (Normal)

Excellente lisibilité sur écran, neutre et professionnelle.

Accessibilité

Taille de base minimale de 16px pour le corps du texte.



Conformité aux normes d'accessibilité WCAG.

2.3. Principes UX/UI

Mobile-First : La conception et le développement doivent être optimisés en priorité pour les écrans mobiles.

Cohérence : Le logo, le favicon et les couleurs doivent être uniformément appliqués sur toutes les pages.

Micro-feedback : Chaque interaction utilisateur (clic de bouton, survol de lien) doit produire un feedback visuel léger.

3. Architecture de l'Information et Spécifications des Pages

3.1. Structure du Site (Navigation)

Niveau 1 (Menu Principal)

Sous-sections (Exemples)

Accueil

Contenu dynamique

Présentation

Histoire, Mission & Vision, Slogan, Équipe, Infrastructures

Facultés

Liste des Facultés, Programmes d'études, Admission par Faculté

Promotions

Vie Étudiante, Témoignages d'Anciens, Clubs & Associations, Galerie Photos

Blog & Actualités

Dernières Nouvelles, Événements, Communiqués

Inscription

Formulaire d'admission, Frais académiques (100 $), Processus

Contact

Coordonnées, Formulaire de contact, Localisation (Carte Google Maps)

3.2. Spécifications Détaillées par Page

A. Page d'Accueil (/)

Bandeau "Hero" : Grande image ou vidéo en arrière-plan d'étudiants souriants ou du campus, surmontée du slogan : "UNIVERSITE DU SAVOIR KONGO - Ex Scientia Lux".

CTA Principal : Bouton clair en couleur d'Action (#FFC107) : "S'INSCRIRE MAINTENANT".

Bloc "Pourquoi USK ?" : Trois à quatre blocs décrivant les avantages clés (e.g., Programmes de Qualité, Corps Professoral Expérimenté).

Aperçu des Facultés : Carrousel ou grille présentant les principales facultés avec lien vers leur page dédiée.

Flux d'Actualités (Blog) : Affichage des 3 dernières publications du blog.

Pied de Page : Liens rapides, Coordonnées (incluant +243 850 828 027), Liens vers réseaux sociaux.

B. Page Facultés (/facultes)

Listing : Présentation sous forme de cartes cliquables pour chaque faculté (e.g., Sciences Économiques et Gestion).

Fiche Faculté : Une page dédiée par faculté.

Présentation du Doyen/Chef de Département.

Liste des Filières disponibles (e.g., Entrepreneuriat, Gestion RH, Informatique et gestion).

Débouchés professionnels.

C. Page Inscription (/inscription)

Formulaire Multi-étapes (Requis) : Pour améliorer l'expérience utilisateur et réduire l'abandon.

Étape 1 : Choix de la Faculté/Filière.

Étape 2 : Informations Personnelles (Nom, Contact, Date de naissance).

Étape 3 : Pièces Jointes (Upload de documents, e.g., Diplôme, CNI).

Étape 4 : Récapitulatif et Paiement (Simulation des frais académiques : 100 $).

Validation : Chaque étape doit être validée côté client (JS) pour assurer l'intégrité des données avant soumission.

4. Spécifications d'Animation et Dynamique

Les animations doivent être subtiles, rapides et servir l'expérience utilisateur sans la surcharger. Le temps de chargement des pages (Page Speed) est une priorité.

4.1. Animations de Défilement (Scroll)

Élément

Type d'Animation

Paramètres

Rôle UX

Bandeau Hero

Parallax Léger

Défilement de l'image de fond à une vitesse inférieure au contenu.

Donne de la profondeur et de l'élégance à l'en-tête.

Blocs de Contenu

'Fade-in' et 'Slide-up'

Les sections apparaissent progressivement du bas vers le haut à l'entrée du viewport (visibilité à 10-15%).

Rythme la lecture et maintient l'engagement sur le contenu.

Barre de Navigation

Sticky (Collante)

La barre de navigation principale reste visible en haut de l'écran lors du défilement.

Assure un accès constant au menu et au bouton d'inscription.

4.2. Micro-interactions (Hover et Clic)

Boutons CTA : Au survol (:hover), le bouton doit s'éclaircir légèrement, ou la couleur d'Action (#FFC107) doit s'inverser avec un contour. Transition de 150ms pour une sensation de fluidité.

Cartes de Faculté : Au survol, la carte doit s'élever légèrement (léger effet d'ombre porté : box-shadow) pour indiquer qu'elle est cliquable.

Liens de Menu : Soulignement subtil ou changement de couleur du texte de lien au survol.

5. Spécifications Techniques

Catégorie

Détail

Technologie Front-end
 
react js, react-bootstrap, gsap

responsive :
tablete, phone, desktop,....

Backend (Formulaires)

Utilisation d'une solution de collection de données sécurisée (e.g., Firestore ou autre API backend) pour la gestion des formulaires d'inscription et de contact.

Performance

Temps de chargement des pages (LCP) ciblé sous les 2.5 secondes. Optimisation des images (WebP/AVIF).

SEO

Meta-descriptions et balises de titre uniques pour chaque page. URL propres (e.g., /facultes/gestion-rh).

Ce cahier des charges établit une base solide et professionnelle pour le développement du site USK, en se concentrant sur une expérience utilisateur moderne et une clarté institutionnelle.