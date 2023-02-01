import { useState } from "react";
import styled from "styled-components";
import Container from "../Container";
import Nav from "./Nav";
import Logo from "./../../assets/images/logo/prosmm-header-logo.svg";
import Blob from "./../../assets/images/hero/big-blob.svg";

const Header = () => {
  const [navList] = useState([
    { link: "#home", text: "خانه" },
    { link: "#home", text: "درباره ما" },
    { link: "#home", text: "خدمات" },
    { link: "#home", text: "نمونه کارها" },
    { link: "#home", text: "تماس با‌ما" },
  ]);

  return (
    <>
      <Container>
        <$Header>
          <Logo />
          <Nav items={navList} />
        </$Header>
        <$Blob />
      </Container>
    </>
  );
};

export default Header;

// Styles

const $Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const $Blob = styled(Blob)`
  position: absolute;
  rotate: 156deg;
  /* top: -51%; */
  /* left: -29%; */
  translate: -50% -50%;
  z-index: -1;

  filter: drop-shadow( 0 0 172px rgba(122, 112, 206, 0.55));
`;
