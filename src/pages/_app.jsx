import { GlobalStyle } from "../styles/global/global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
