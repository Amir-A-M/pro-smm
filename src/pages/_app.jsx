import { GlobalStyle } from "../styles/global/global";
import IRANSans from "../assets/fonts/IRANSans";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <div className={IRANSans.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
