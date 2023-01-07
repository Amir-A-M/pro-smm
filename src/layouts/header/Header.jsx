import { useState } from "react";
import styled from "styled-components";
import Container from "../Container";
import Nav from "./Nav";
import Logo from "./../../assets/images/logo/prosmm-header-logo.svg";

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
      <$Header>
        <Logo />
        <Nav items={navList} />
      </$Header>
      <$Blob />
    </>
  );
};

export default Header;

// Styles

const $Header = styled.header`
  padding: 2rem 3.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: auto;
  width: 65rem;
  max-width: 100%;
`;

const $Blob = styled.div`
  width: 110vw;
  height: 110vw;

  position: fixed;
  top: -70%;
  left: -50%;
  z-index: -1;

  border-radius: 50%;
  background-color: rgb(136, 128, 206);
  box-shadow: 0px 0px 172px 0px rgba(122, 112, 206, 0.55);
`;
