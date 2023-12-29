import Head from "next/head";

const HeadMeta = ({ title, description, url }) => {
  return (
    <Head>
      <title>{title || "혜진종합관리"}</title>
      <meta
        name="description"
        content={
          description ||
          "경비용역/위생용역/이주관리,범죄예방 혜진종합관리입니다."
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "혜진종합관리"} />
      <meta property="og:description"
        content={
        description ||
        "경비용역/위생용역/이주관리,범죄예방 혜진종합관리입니다."
      }/>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://xn--zb0b93v0rlpgb594av4a.kr"} />
      <meta property="og:image" content={"https://xn--zb0b93v0rlpgb594av4a.kr/images/logo.png" } />
      <meta name="keywords" content="혜진종합관리"/>
      <meta property="og:article:author" content="혜진종합관리" />
    </Head>
  );
};

export default HeadMeta;