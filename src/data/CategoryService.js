export const CategoryService = {
  getData() {
    return [
      // Nourriture et Boissons
      { name: "Courses", code: "courses" },
      { name: "Restaurants", code: "restaurants" },
      { name: "Fast Food", code: "fast-food" },
      { name: "Cafés", code: "cafes" },
      { name: "Bars", code: "bars" },
      { name: "Livraison de Nourriture", code: "livraison-de-nourriture" },
      { name: "Épicerie", code: "epicerie" },
      { name: "Fruits et Légumes", code: "fruits-et-legumes" },
      { name: "Produits Laitiers", code: "produits-laitiers" },
      { name: "Viande et Poisson", code: "viande-et-poisson" },
      { name: "Boissons", code: "boissons" },
      { name: "Alcools", code: "alcools" },
      { name: "Snacks", code: "snacks" },
      { name: "Boulangeries", code: "boulangeries" },
      { name: "Pâtisseries", code: "patisseries" },
      { name: "Boucheries", code: "boucheries" },

      // Logement
      { name: "Loyer", code: "loyer" },
      { name: "Hypothèque", code: "hypotheque" },
      { name: "Électricité", code: "electricite" },
      { name: "Eau", code: "eau" },
      { name: "Gaz", code: "gaz" },
      { name: "Internet", code: "internet" },
      { name: "Téléphone", code: "telephone" },
      { name: "Télévision", code: "television" },
      { name: "Entretien de la Maison", code: "entretien-maison" },
      { name: "Réparations", code: "reparations" },
      { name: "Assurance Habitation", code: "assurance-habitation" },

      // Transport
      { name: "Transport Public", code: "transport-public" },
      { name: "Bus", code: "bus" },
      { name: "Métro", code: "metro" },
      { name: "Train", code: "train" },
      { name: "Taxi", code: "taxi" },
      { name: "VTC", code: "vtc" },
      { name: "Carburant", code: "carburant" },
      {
        name: "Entretien et Réparations de Voiture",
        code: "entretien-reparations-voiture",
      },
      { name: "Assurance Automobile", code: "assurance-automobile" },
      { name: "Parking", code: "parking" },
      { name: "Péages", code: "peages" },
      { name: "Location de Voiture", code: "location-voiture" },
      { name: "Vélos", code: "velos" },
      { name: "Trottinettes", code: "trottinettes" },

      // Santé et Bien-être
      { name: "Consultations Médicales", code: "consultations-medicales" },
      { name: "Dentiste", code: "dentiste" },
      { name: "Ophtalmologue", code: "ophtalmologue" },
      { name: "Médicaments", code: "medicaments" },
      { name: "Assurance Santé", code: "assurance-sante" },
      {
        name: "Abonnement à la Salle de Sport",
        code: "abonnement-salle-de-sport",
      },
      { name: "Équipement de Sport", code: "equipement-de-sport" },
      { name: "Bien-être et Spa", code: "bien-etre-spa" },
      { name: "Massages", code: "massages" },

      // Divertissement
      { name: "Cinéma", code: "cinema" },
      { name: "Concerts", code: "concerts" },
      { name: "Théâtre", code: "theatre" },
      { name: "Livres", code: "livres" },
      { name: "Jeux Vidéo", code: "jeux-video" },
      { name: "Streaming Vidéo", code: "streaming-video" },
      { name: "Streaming Musique", code: "streaming-musique" },
      { name: "Musées", code: "musees" },
      { name: "Parcs d'Attractions", code: "parcs-attractions" },
      { name: "Sorties", code: "sorties" },

      // Éducation
      { name: "Frais de Scolarité", code: "frais-scolarite" },
      { name: "Matériel Scolaire", code: "materiel-scolaire" },
      { name: "Cours en Ligne", code: "cours-en-ligne" },
      { name: "Livres Éducatifs", code: "livres-educatifs" },
      { name: "Formations", code: "formations" },

      // Voyages
      { name: "Billets d'Avion", code: "billets-avion" },
      { name: "Billets de Train", code: "billets-train" },
      { name: "Location de Voiture", code: "location-voiture" },
      { name: "Hôtels", code: "hotels" },
      { name: "Airbnb", code: "airbnb" },
      { name: "Campings", code: "campings" },
      { name: "Visites Guidées", code: "visites-guidees" },
      { name: "Excursions", code: "excursions" },
      { name: "Croisières", code: "croisieres" },

      // Autres Dépenses
      { name: "Dons", code: "dons" },
      { name: "Cadeaux", code: "cadeaux" },
      { name: "Frais Bancaires", code: "frais-bancaires" },
      { name: "Impôts", code: "impots" },
      { name: "Amendes", code: "amendes" },
    ];
  },

  getCategories() {
    return Promise.resolve(this.getData());
  },
};
