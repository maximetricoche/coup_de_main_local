export type DirectoryType = {
  id: number;
  nom: string;
  adresse: string;
  tel: string;
  horaires_ouverture: string;
  categorie: string;
  image: string;
  datas: DirectoryType;
};

export type DirectoryProps = {
  name: string;
  category?: string;
  image: string;
};
