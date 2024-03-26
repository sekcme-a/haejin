import Document, { 
  Html, 
  Head, 
  Main, 
  NextScript 
} from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="kr">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="naver-site-verification" content="031c8df7002f8ed524668189cbae7f18c4dcfd1d" />
          <meta name="google-site-verification" content="Ci1nOc6nfh4IK3JSplRdACS8hlgpwm_aVo3aDyMg0iM" />
            <link
                href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i&display=swap"
                rel="stylesheet"
            />
          <link rel="icon" href="https://xn--zb0b93v0rlpgb594av4a.kr/images/favicon.png" />
          <link rel="canonical" href="https://xn--zb0b93v0rlpgb594av4a.kr" />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
          />
          <Script
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=da751fb23c7f8cc96a72163af91ed742&libraries=services,clusterer&autoload=false`}
            strategy="beforeInteractive"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
