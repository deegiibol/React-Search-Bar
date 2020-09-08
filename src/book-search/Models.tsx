type ImageLinks = {
  smallThumbnail: string;
  thumbnail: string;
};

export interface IBook {
  id: string;
  title: string;
  authors: string[];
  publisher: string;
  publishDate: string;
  description: string;
  pageCount: number;
  categories: string[];
  imageLinks: ImageLinks;
  language: string;
}
