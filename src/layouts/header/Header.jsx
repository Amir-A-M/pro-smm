import { useRef, useState } from "react";
import styled from "styled-components";
import Container from "../Container";
import Nav from "./Nav";
import Logo from "./../../assets/images/logo/prosmm-header-logo.svg";
import Blob from "./../../assets/images/hero/big-blob.svg";
import { device } from "../../styles/global";
import BurgerButton from "../../components/hero/header/BurgerButton";

let headerRef;
const Header = () => {
  headerRef = useRef();

  const [navList] = useState([
    { link: "#home", text: "خانه" },
    { link: "#home", text: "درباره ما" },
    { link: "#home", text: "خدمات" },
    { link: "#home", text: "نمونه کارها" },
    { link: "#home", text: "تماس با‌ما" },
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
    transform: translate(${({ isOpen }) => (isOpen ? "0" : "100%")}, 0);

    width: 80vw;
    max-width: 16rem;
    padding: 2rem;

    flex-direction: column;
    justify-content: start;
    align-items: stretch;

    background-color: #fff;
    box-shadow: 1px 0px 9px 0px #0000003d;
    border-radius: 1rem 0 0 1rem;
    transition: all ease-in-out 100ms;
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
  rotate: 156deg;
  translate: -50% -50%;
  z-index: -1;

  svg {
    display: block;
    width: 50vw;
    height: 50vh;

    filter: drop-shadow(0 0 172px rgba(122, 112, 206, 0.55));
  }

  ${device.mobileS} {
  }
`;
