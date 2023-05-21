import { GlobalStyle } from "../styles/global/global";

import Vazirmatn from "../assets/fonts/vazirmatn";


function MyApp({ Component, pageProps }) {
  return (
    <div className={Vazirmatn.className}>
      <GlobalStyle />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
