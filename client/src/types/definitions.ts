export type Directory = {
  id: number;
  nom: string;
  adresse: string;
  tel: string;
  horaires_ouverture: string;
  categorie: string;
};

export type Service = {
  id: number;
  nom: string;
  prenom: string;
  adresse: string;
  description: string;
  categorie: string;
  type: string;
  échange: string;
  image: string;
};
