import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { device } from "../global/index";

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  :root {
    --base-font-size           : .65rem;
    --fluid-typography-ratio   : 0.6;
    --rem-lg                   : calc(var(--base-font-size) + var(--fluid-typography-ratio) * 1vw);
    --rem-md                   : calc(var(--base-font-size) + var(--fluid-typography-ratio) * 1.2vw);
    --rem-sm                   : calc(var(--base-font-size) + var(--fluid-typography-ratio) * 1.5vw);
    --rem-xsm                  : calc(var(--base-font-size) + var(--fluid-typography-ratio) * 2.1vw);
    --rem-xxsm                 : calc(var(--base-font-size) + var(--fluid-typography-ratio) * 2.4vw);
  }

  *,
  *::after,
  ::before {
    padding: 0;
    margin: 0;
    text-decoration: none;
    box-sizing: border-box;
    border: none;
    outline: none;
  }

  html {
    scroll-behavior: smooth;
    /*font-size : 62.5%;*/
    font-size: var(--rem-lg);
    @media only screen and ${device.tablet} {
      font-size: var(--rem-md);
    }
    @media only screen and ${device.mobileL} {
      font-size: var(--rem-sm);
    }
    @media only screen and ${device.mobileM} {
      font-size: var(--rem-xsm);
    }
    @media only screen and ${device.mobileS} {
      font-size: var(--rem-xxsm);
    }
  }

  body {
    box-sizing: border-box;

    text-align: justify;
    text-justify: inter-word;
    font-weight: 300;
    font-family: IRANSans;
	  direction: rtl;
    
    background: #fff;
    -webkit-tap-highlight-color: transparent;

    width: 100vw;
    overflow-x: hidden;
    min-height: 100vh;

    position: relative;
  }
 
  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
    height: 400;
  }
  
  table {
    border-collapse: collapse;
  }

  textarea {
    white-space: revert;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  svg {
    max-width: 100%;
    height: auto;
  }

  /* custom scrollbar */
  ::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background-color: #eeeeee30;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c3c3c3;
    border-radius: 0.3rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #c0c0c0;
    border-radius: 0.3rem;
  }

`;
