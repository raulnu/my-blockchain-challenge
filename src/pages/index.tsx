import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Head from "next/head";
import articles from "../../data/articles";
import Article from "@/components/Article/Article";

export default function Home() {
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
        <section className="flex-grow bg-gradient-to-b from-cyan-50 to-cyan-100 flex flex-col">
          {articles.map((article, index) => {
            return (
              <Article
                key={index}
                id={article.id}
                title={article.title}
                content={article.content}
              />
            );
          })}
        </section>
        <Footer />
      </main>
    </>
  );
}
