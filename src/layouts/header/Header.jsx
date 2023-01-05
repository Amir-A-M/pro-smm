import { useState } from "react";
import styled from "styled-components";
import Container from "../Container";
import Nav from "./Nav";

const Header = () => {
  const [navList] = useState([
    { link: "#home", text: "خانه" },
    { link: "#home", text: "نمونه کارها" },
    { link: "#home", text: "درباره ما" },
    { link: "#home", text: "تماس با‌ما" },
  ]);

  return (
    <$Header>
      <Container>
        <Nav items={navList} />
      </Container>
    </$Header>
  );
};

export default Header;

// Styles

const $Header = styled.header`
  padding: 2rem;

  display: flex;
`;
