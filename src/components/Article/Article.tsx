export default function Article({ title, content }: IProps) {
  return (
    <article className="p-5 border border-b-slate-900 [&>*]:hover:scale-110 [&>*]:duration-500 [&>*]ease-in">
      <h2 className="text-2xl font-medium text-gray-900">{title}</h2>
      <p className="text-gray-800">{`${content.slice(0, 50)}...`}</p>
    </article>
  );
}

interface IProps {
  title: string;
  content: string;
}
