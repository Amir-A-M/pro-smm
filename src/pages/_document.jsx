import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

import IRANSans from "../assets/fonts/IRANSans";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <StyleSheetManager>
                <App {...props} />
              </StyleSheetManager>
            ),
        });
      const styleTags = sheet.getStyleElement();
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styleTags,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html dir={"rtl"} lang={"fa"}>
        <Head>
          {this.props.styleTags}

          <title>پرو اس‌اس‌ام</title>
        </Head>
        <body className={IRANSans.className}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
