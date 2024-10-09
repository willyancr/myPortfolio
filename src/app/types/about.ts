type Child = {
  bold?: boolean;
  text: string;
  type: string;
};

type Descricao = {
  children: Child[];
};

type Badge = {
  id: number;
  skill: string;
};

type Foto = {
  url: string;
};
export type DataAbout = {
  id: number;
  descricao: Descricao[];
  badge: Badge[];
  linkCV: string;
  fotoPerfil: Foto;
}