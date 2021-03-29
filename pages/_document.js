import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head >
            
            <meta name="description" content="ideamarket bitcoin exchange trade" />
            {/* Nprogress css */}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            {/*Google Fonts*/ }
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap" rel="stylesheet"/>
            <script src="https://unpkg.com/scrollreveal"></script>
            {/*<link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
            />*/}
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