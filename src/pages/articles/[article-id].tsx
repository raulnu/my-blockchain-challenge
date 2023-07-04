import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Head from "next/head";
import articles from "../../../data/articles";
import { useRouter } from "next/router";

export default function Article() {
  const router = useRouter();
  const article = articles.filter(
    (article) => article.id === router.query["article-id"]
  )[0];

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
      <main>
        <Header />
        <article>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </article>
        <Footer />
      </main>
    </>
  );
}
