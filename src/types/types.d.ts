type Author = {
  name: string;
  url?: string;
  institution?: string;
  notes?: string[];
}
export interface Link {
  name: string;
  url: string;
  icon?: string;
  iconComponent?: string; // 이 줄을 추가
}
type Link = {
  url: string;
  name: string;
  icon?: string;
}

type Note = {
  symbol: string;
  text: string;
}

export { Author, Link, Note };