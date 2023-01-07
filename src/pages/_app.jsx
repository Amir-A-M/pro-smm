import { GlobalStyle } from "../styles/global/global";
import IRANSans from "../assets/fonts/IRANSans";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <main className={IRANSans.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
