const articles: IArticle[] = [
  {
    id: "1",
    title: "Article 1",
    date: "2021-12-12",
    img: "https://andresbaredes.files.wordpress.com/2021/12/solidity-feat.jpg?w=233&h=&zoom=2",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
    ],
  },
  {
    id: "2",
    title: "Article 2",
    date: "2021-12-12",
    img: "https://ih1.redbubble.net/image.1599719281.7189/st,small,507x507-pad,600x600,f8f8f8.jpg",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
    ],
  },
  {
    id: "3",
    title: "Article 3",
    date: "2021-12-12",
    img: "https://ih1.redbubble.net/image.1599719281.7189/st,small,507x507-pad,600x600,f8f8f8.jpg",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
    ],
  },
  {
    id: "4",
    title: "Article 4",
    date: "2021-12-12",
    img: "https://ih1.redbubble.net/image.1599719281.7189/st,small,507x507-pad,600x600,f8f8f8.jpg",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
    ],
  },

  {
    id: "5",
    title: "Article 5",
    date: "2021-12-12",
    img: "https://ih1.redbubble.net/image.1599719281.7189/st,small,507x507-pad,600x600,f8f8f8.jpg",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
    ],
  },

  {
    id: "6",
    title: "Article 6",
    date: "2021-12-12",
    img: "https://ih1.redbubble.net/image.1599719281.7189/st,small,507x507-pad,600x600,f8f8f8.jpg",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget al",
    ],
  },
];

export default articles;

export interface IArticle {
  id: string;
  title: string;
  content: string[];
  img?: string;
  date?: string;
}
