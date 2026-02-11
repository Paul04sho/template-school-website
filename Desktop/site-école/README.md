On va faire ça propre, stratégique et rentable.
Objectif : **un site vitrine moderne pour école primaire**, rapide à déployer et facile à dupliquer pour d’autres écoles 💰

---

# 📘 README – Site Web École Primaire (HTML / CSS / JS)

## 🎯 Objectif du projet

Créer un site vitrine moderne, responsive et épuré pour une école primaire en Côte d’Ivoire afin de :

* Améliorer sa visibilité en ligne
* Rassurer les parents
* Faciliter les inscriptions
* Donner une image professionnelle

Stack : **HTML – CSS – JavaScript (vanilla)**
Backend plus tard si besoin (formulaire dynamique, admin, etc.).

---

# 🗂 1️⃣ Structure du projet

```
ecole-site/
│
├── index.html
├── about.html
├── management.html
├── news.html
├── gallery.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
├── assets/
│   ├── images/
│   └── icons/
│
└── README.md
```

---

# 📄 2️⃣ Nombre de fichiers nécessaires

### ✅ HTML : **6 fichiers**

1. index.html (Accueil)
2. about.html (À propos)
3. management.html (Direction & équipe)
4. news.html (Actualités & événements)
5. gallery.html (Galerie)
6. contact.html (Contact)

👉 Pourquoi séparés ?
Plus simple à vendre comme “site professionnel” + SEO mieux structuré.

---

### 🎨 CSS : **1 seul fichier**

* `style.css`

👉 Plus propre pour commencer.
On peut séparer plus tard si le projet devient énorme.

---

### ⚙️ JavaScript : **1 seul fichier**

* `main.js`

Servira pour :

* Menu mobile
* Slider hero
* Galerie interactive
* Animation scroll
* Validation formulaire

---

# 🏗 3️⃣ Étapes de développement

---

## 🥇 Étape 1 – Setup du projet

* Créer l’arborescence
* Ajouter reset CSS
* Définir variables CSS :

```css
:root {
  --primary: #f7931e;
  --dark: #222;
  --light: #f5f5f5;
  --white: #ffffff;
}
```

---

## 🥈 Étape 2 – Header commun

Créer un header réutilisable :

* Logo
* Navigation
* Bouton Contact
* Menu mobile (hamburger)

💡 Astuce pro :
Copier-coller le header/footer dans toutes les pages pour version 1.
Plus tard on factorise en template si backend.

---

## 🥉 Étape 3 – Page Accueil (index)

Sections :

1. Hero (image + slogan + bouton)
2. Activités
3. Blog preview
4. Équipe
5. Galerie preview
6. Call to action
7. Footer

Objectif : rassurer + convertir.

---

## 🏫 Étape 4 – About

* Who we are
* Mission
* Vision
* Bannière CTA

---

## 👩🏾‍🏫 Étape 5 – Management

* Directeur
* Équipe pédagogique
* Photos + mini bio

---

## 📰 Étape 6 – News

* Cartes articles
* Pagination simple (JS)
* Image + date + résumé

---

## 🖼 Étape 7 – Gallery

* Grid CSS
* Lightbox JS
* Hover effect

---

## 📞 Étape 8 – Contact

* Formulaire
* Adresse
* Téléphone
* Email
* Google Maps embed

Validation JS simple :

```js
if(name === "") {
  alert("Veuillez remplir le champ nom");
}
```

---

# 📱 4️⃣ Responsive (ULTRA IMPORTANT)

Approche recommandée :
👉 Desktop-first (comme ta maquette)

Breakpoints :

```css
@media (max-width: 992px) {}
@media (max-width: 768px) {}
@media (max-width: 576px) {}
```

---

# ✨ 5️⃣ Améliorations modernes à intégrer

* Scroll reveal animation
* Boutons avec hover smooth
* Box-shadow léger
* Border-radius 8px
* Transitions 0.3s

---

# 🚀 6️⃣ Optimisation pour vendre le service

Quand tu proposes ça à une école :

1. Site responsive
2. Référencement local Google
3. Intégration WhatsApp
4. Formulaire d’inscription simple
5. Galerie photo
6. Hébergement + nom de domaine

---

# 💰 7️⃣ Stratégie Business (Côte d’Ivoire)

Pack Basique :

* Site vitrine 5 pages
* 150 000 – 250 000 FCFA

Pack Premium :

* Site + formulaire dynamique + admin
* 350 000 – 600 000 FCFA

Maintenance mensuelle :

* 20 000 – 50 000 FCFA

---

# 🔜 8️⃣ Phase 2 (Backend si besoin)

On pourra ajouter :

* PHP ou Node.js
* Base de données
* Dashboard admin
* Upload images
* Gestion actualités

---