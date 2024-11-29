export type Parents = {
  id: string;
  profession: string | null;
  ward: string;
  business: String | null;
  region: string;
  village: string;
  name: string | null;
  phone: string;
  email: string | null;
  club: string | null;
  district: string;
}[];

export interface Video {
  id: number;
  src: string;
  title: string;
  link: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  type: String;
  url: String;
  createdAt: string;
}
