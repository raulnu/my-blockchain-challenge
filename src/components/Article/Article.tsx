export default function Article({ title, content, img, date }: IProps) {
  return (
    <article className="p-5 sm:hover:p-7 border border-b-slate-900 duration-300 ease-in flex justify-center items-center flex-col sm:items-center sm:justify-around sm:flex-row hover:bg-gradient-to-r hover:from-sky-200 to-sky-50">
      <div className="flex items-center">
        <img src={`${img}`} alt="solidity" width={65} className="rounded" />
        <div className="pl-5 flex flex-col justify-center">
          <span>{date}</span>
          <h2 className="text-2xl font-medium text-gray-900">{title}</h2>
          <p className="text-gray-800">{`${content[0].slice(0, 80)}...`}</p>
        </div>
      </div>
      <button className="rounded w-28 mt-5 sm:mt-0 p-2 bg-yellow-500 hover:bg-yellow-400 duration-300 sm:h-10 flex justify-center items-center">
        <a href={`articles/${title}`}>Read Article</a>
      </button>
    </article>
  );
}

interface IProps {
  id: string;
  title: string;
  content: string[];
  img?: string;
  date?: string;
}
