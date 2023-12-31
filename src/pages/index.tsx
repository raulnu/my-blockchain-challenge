import Footer from "@/components/Footer/Footer";
import { useState } from "react";
import Header from "@/components/Header/Header";
import Head from "next/head";
import articles from "../../data/articles";
import Article from "@/components/Article/Article";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
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
      <main className="min-h-screen flex flex-col">
        <Header />
        {loggedIn && (
          <a
            href="/new-article"
            className="m-5 text-center py-2 px-4 bg-yellow-500 hover:bg-yellow-400 duration-300 rounded w-3/6 self-center"
          >
            Add New Article
          </a>
        )}
        <section className="flex-grow bg-gradient-to-b from-cyan-50 to-cyan-100 flex flex-col">
          {articles.map((article, index) => {
            return (
              <Article
                key={index}
                id={article.id}
                img={article.img}
                title={article.title}
                content={article.content}
                date={article.date}
              />
            );
          })}
        </section>
        <Footer />
      </main>
    </>
  );
}
