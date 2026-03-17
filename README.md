# Teknisk dokumentation - Grp. 5

---

## Om Projekt

I dette projekt har vi lavet et cookbook-website, som bruger indhold fra udleveret DummyJSON API. Vi bruger ligeledes HTML, CSS og javascript i opgaveløsningen.

---
### Links
*GitHub repository: https://github.com/SaethorMH/Yumsty
*GitHub Pages: 
*Figma: https://www.figma.com/design/VUoEL5qofw6q9y680mQons/Team-56?node-id=280-1049&t=H1qOEWV1cLK5BmR8-1
*Trello: https://trello.com/b/sL2jNAQa/tema-8-gruppe-56 

---

## Projektstruktur

---

## Filbeskrivelser

  *index.html – forsiden
  *recipeList.html – viser en liste med data fra API'et
  *discover.html – viser lister med forskelilge kategorier fra API'et
  *recipe.html - viser individuelle id'er fra API'et
  *contact.html – indeholder formular
  *style.css – styling og layout
  *JavaScript-filer – styrer det dynamiske indhold på de forskellige sider

  ---
  
## Kode funktioner

Vi har opdelt JavaScript, så hver side har sin egen fil.

### index.js
Her vises indholdet dynamisk, med links direkste til specifikke opskrifter eller til kategorier.

### recipeList.js
Henter data fra DummyJSON API'et og viser opskrifterne på en liste.

### discover.js
Henter data fra DummyJSON API'et og viser flere lister med forskellige arrangeringer af lister fra API'et.

### recipe.js
Henter data fra DummyJSON API'et og viser individuelle id'er for den specifikke opskrift brugeren klikker på.

### contact.js
Modtager data som brugeren indtaster, som at tilmelde sig til nyhedsbrevet og indsende en opskrift.

---

# Data og JSON-struktur

### API'et er i JSON-format.

### Eks.:
```
{
  "products": [
    {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "discountPercentage": 10.48,
      "rating": 2.56,
      "stock": 99,
      "tags": [
        "beauty",
        "mascara"
      ],
      "brand": "Essence",
      "sku": "BEA-ESS-ESS-001",
      "weight": 4,
      "dimensions": {
        "width": 15.14,
        "height": 13.08,
        "depth": 22.99
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Would not recommend!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Eleanor Collins",
          "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Lucas Gordon",
          "reviewerEmail": "lucas.gordon@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Eleanor Collins",
          "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 48,
      "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "5784719087687",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
    }
```

---

# Felter vi bruger
* id - Dette bruges til at føre brugeren videre til den specifikke opskrift.
* 
*
*
*


## Formular og validering

## Navngivning

## Eksempler på variabler
```
const rName
const rating
const instructions
const mealTypeBox
```
## Eksempler på funktioner
```
makeButtons()
pageCount()
showRecipes()
```

---

## Branches

### Workflow
+Lave en branch med et beskrivende feature-navn eller med eget navn
+Kode en feature
+Committe ændringer
+Pushe til GitHub
+Merge til main når det virkede

---

## Udfordringer undervejs


## Mulige forbedringer

---
## Gruppemedlemmer:
- Nicolai
- Sofie
- Sæthor
- Iben
