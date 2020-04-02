import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();
  
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
            <meta charSet="UTF-8" />
            <meta name="keywords" content="Covid,Covid19,Corona Virus,Virus"/>
            <meta name="description" content="All about Corona Virus"/>
            <meta name="author" content="Ihsandev"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument