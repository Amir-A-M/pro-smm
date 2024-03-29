import { useRef, useState } from "react";
import styled from "styled-components";
import Container from "../Container";
import Nav from "./Nav";
import Logo from "./../../assets/images/logo/prosmm-header-logo.svg";
import Blob from "./../../assets/images/hero/big-blob.svg";
import { device } from "../../styles/global";
import BurgerButton from "./BurgerButton";

let headerRef;
const Header = () => {
  headerRef = useRef();

  const [navList] = useState([
    { link: "#home", text: "خانه" },
    { link: "#about", text: "درباره ما" },
    { link: "#services", text: "خدمات" },
    { link: "#works", text: "نمونه کارها" },
    { link: "#contact", text: "تماس با‌ما" },
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuOnClick(e) {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <Container ref={headerRef}>
        <BurgerButton isOpen={isMenuOpen} onClick={handleMenuOnClick} inNav />

        <$Header isOpen={isMenuOpen}>
          <$LogoWrapper>
            <span></span>
            <Logo className="logo" />
          </$LogoWrapper>
          <Nav items={navList} isOpen={isMenuOpen} />
        </$Header>
        {/* <$BlobWrapper>
          <Blob />
        </$BlobWrapper> */}
      </Container>
    </>
  );
};

export default Header;
export { headerRef };

// Styles

const $Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 990;

  ${device.mobileL} {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    transform: translate(${({ isOpen }) => (isOpen ? "0" : "110%")}, 0);

    width: 80vw;
    max-width: 16rem;
    margin: 0.4rem;
    padding: 1.6rem;

    flex-direction: column;
    justify-content: start;
    align-items: stretch;

    background-color: #fff;
    box-shadow: 1px 0px 9px 0px #0000003d;
    border-radius: 0.7rem;
    transition: all ease-in-out 200ms;
  }
`;

const $LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  width: 8.5rem;

  ${device.mobileL} {
    width: 100%;

    svg {
      width: 100%;
      max-width: 9rem;
    }

    margin-bottom: 5rem;
  }
`;

const $BlobWrapper = styled.div`
  position: absolute;
  width: 65vw;
  height: 55vh;

  rotate: 156deg;
  z-index: -1;
  translate: -30% 45%;

  svg {
    display: block;
    filter: drop-shadow(0 0 172px rgba(122, 112, 206, 0.55));
  }

  ${device.mobileS} {
  }
`;
