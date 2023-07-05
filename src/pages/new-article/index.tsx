import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Head from "next/head";
import { IArticle } from "../../../data/articles";
import { useState } from "react";

export default function Article() {
  const [editing, setEditing] = useState<boolean>(false);
  const [titleValue, setTitleValue] = useState<string>("");
  const [contentValue, setContentValue] = useState<string[]>([]);

  const toggleEditting = () => {
    setEditing(!editing);
  };

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

        {/* Edit Article */}

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

        <Footer />
      </main>
    </>
  );
}
