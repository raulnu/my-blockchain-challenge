const articles: IArticle[] = [
  {
    title: "Article 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
  },
  {
    title: "Article 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
  },
  {
    title: "Article 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
  },
];

export default articles;

export interface IArticle {
  title: string;
  content: string;
  image?: string;
}
