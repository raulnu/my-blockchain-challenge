import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Head from "next/head";
import { IArticle } from "../../../data/articles";
import articles from "../../../data/articles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Article() {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  const router = useRouter();
  const [article, setArticle] = useState<IArticle>();
  const [editing, setEditing] = useState<boolean>(false);
  const [titleValue, setTitleValue] = useState<string>();
  const [contentValue, setContentValue] = useState<string[]>();

  const toggleEditting = () => {
    setEditing(!editing);
  };

  useEffect(() => {
    setArticle(
      articles.filter(
        (article) => article.title === router.query["article-title"]
      )[0]
    );
  }, [router.query]);
  useEffect(() => {
    if (article) {
      setTitleValue(article.title);
      setContentValue(article.content);
    }
  }, [article]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
    console.log(titleValue);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentValue(e.target.value.split("\n"));
    console.log(contentValue);
  };

  return (
    <>
      <Head>
        <title>My Blockchain Challenge</title>
        <meta
          name="description"
          content="Blog about my progress as a blockchain developer"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="flex flex-col min-h-screen">
        <Header />
        {article && !editing && (
          <article className="flex-grow flex flex-col items-center bg-gradient-to-b from-cyan-50 to-cyan-100">
            <h2 className="mt-5 sm:mt-8 mb-3 text-4xl text-center">
              {article.title}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-between w-10/12 sm:w-9/12 mb-5">
              <img
                src={article.img}
                alt="solidity"
                width={250}
                className="mb-6 mt-5 sm:mr-8 sm:self-start"
              />
              <div>
                {article.content.map((paragraph, index) => {
                  return (
                    <p
                      className="text-md sm:text-lg text-gray-800 m-3 text-justify"
                      key={index}
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="w-10/12 text-right sm:w-9/12 m-5 flex flex-col items-end">
              <span>Raúl Navarro Uribe</span>
              <span>{article.date}</span>
              <button className="my-5">
                <a
                  href="/"
                  className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400 duration-300"
                >
                  Return to home
                </a>
              </button>
            </div>
            {loggedIn && (
              <div className="w-3/6 flex justify-evenly">
                <button
                  onClick={toggleEditting}
                  type="button"
                  className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400 duration-300 mb-5"
                >
                  Edit Article
                </button>
                <button
                  type="button"
                  className="bg-red-700 text-gray-100 px-4 py-2 rounded hover:bg-red-600 duration-300 mb-5"
                >
                  Delete Article
                </button>
              </div>
            )}
          </article>
        )}

        {/* Edit Article */}

        {article && editing && (
          <form className="flex-grow flex flex-col items-center bg-gradient-to-b from-cyan-50 to-cyan-100">
            <div className="flex flex-col items-center m-5">
              <label htmlFor="title" className="text-xl">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={titleValue}
                className="my-3 text-4xl text-center"
                onChange={handleTitleChange}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between w-10/12 sm:w-9/12 mb-5">
              <div>
                <input type="file" />
                <img
                  src={article.img}
                  alt="solidity"
                  width={250}
                  className="mb-6 mt-5 sm:mr-8 sm:self-start"
                />
              </div>
              <div className="flex flex-col items-center w-4/6 h-80">
                <label htmlFor="content" className="text-lg">
                  Content
                </label>
                {contentValue && (
                  <textarea
                    name="content"
                    id="content"
                    className="text-lg text-justify m-3 p-2 w-full h-5/6"
                    value={contentValue.join("\n")}
                    onChange={handleContentChange}
                  ></textarea>
                )}
              </div>
            </div>
            <div className="w-3/6 flex justify-evenly">
              <button
                onClick={toggleEditting}
                type="button"
                className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400 duration-300 mb-5"
              >
                Cancel Edit
              </button>
              <button
                type="button"
                className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400 duration-300 mb-5"
              >
                Submit Edit
              </button>
            </div>
          </form>
        )}
        <Footer />
      </main>
    </>
  );
}
