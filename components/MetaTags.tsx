import Head from "next/head";

const MetaTags = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="ELGUIL Zineb" />
        <meta
          name="description"
          content="Front-end React js developer and user interface designer portfolio"
        />
        <meta
          name="keywords"
          content="Front-end, web development,Front-end portfolio, web designer, next js portfolio, react js developer"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
    </>
  );
};

export default MetaTags;
