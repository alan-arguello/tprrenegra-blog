import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Ensure UTF-8 encoding */}
          <meta charSet="UTF-8" />
          {/* Responsive viewport meta tag */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* Add custom tags here */}
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
