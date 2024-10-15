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

export type ModalDescription = {
  type: "heading" | "paragraph" | "list";
  level?: number; // Presente em 'heading'
  format?: "unordered" | "ordered"; // Presente em 'list'
  children: Array<{
    text: string;
    type: "text" | "list-item";
    bold?: boolean; // Presente em textos que precisam ser em negrito
    children?: Array<{
      text: string;
      type: "text";
    }>;
  }>;
};
export type DataProject = {
  id: number;
  titulo: string;
  descricao: Descricao[];
  linkRespositorio: string;
  linkDepoy: string;
  descricaoModal: ModalDescription[];
  capa: Foto;
  badge: Badge[];
  destaque: boolean;
};
