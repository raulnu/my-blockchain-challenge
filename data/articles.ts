const articles: IArticle[] = [
  {
    id: "1",
    title: "Article 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
  },
  {
    id: "2",
    title: "Article 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
  },
  {
    id: "3",
    title: "Article 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
  },
  {
    id: "4",
    title: "Article 4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
  },
  {
    id: "5",
    title: "Article 5",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
  },
  {
    id: "6",
    title: "Article 6",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
  },
];

export default articles;

export interface IArticle {
  id: string;
  title: string;
  content: string;
  image?: string;
}
