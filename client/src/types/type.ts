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

export type FilterDirectoryProps = {
  setCurrentCategory: (category: string) => void;
  setSearch: (search: string) => void;
  categories: string[];
  search: string;
};

export type ServicesType = {
  id: number;
  nom: string;
  prenom: string;
  adresse: string;
  description: string;
  categorie: string;
  type: string;
  échange: string;
  image: string;
  datas: ServicesType;
};

export type ServicesProps = {
  name: string;
  prenom: string;
  categorie?: string;
  image: string;
  type: string;
  description: string;
};

export type FilterServicesProps = {
  setCurrentCategory: (category: string) => void;
  setSearch: (search: string) => void;
  categories: string[];
  search: string;
};
