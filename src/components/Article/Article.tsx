export default function Article({ id, title, content }: IProps) {
  return (
    <article className="pl-6 cursor-pointer hover:pl-8 h-20 hover:h-24 border border-b-slate-900 duration-300 ease-in flex flex-col justify-center items-left hover:bg-gradient-to-r hover:from-sky-200 to-sky-50">
      <a href={`articles/${title}`}>
        <h2 className="text-2xl font-medium text-gray-900">{title}</h2>
        <p className="text-gray-800">{`${content.slice(0, 50)}...`}</p>
      </a>
    </article>
  );
}

interface IProps {
  id: string;
  title: string;
  content: string;
}
