import styled from "styled-components";
import { device } from "../../styles/global";

const BurgerButton = ({ onClick, isOpen, inNav }) => {
  return (
    <$button onClick={onClick} className={isOpen ? "open" : ""} inNav={inNav}>
      <span className="menu_button_line top"></span>
      <span className="menu_button_line mid"></span>
      <span className="menu_button_line botm"></span>
    </$button>
  );
};

export default BurgerButton;

const $button = styled.button`
  display: none;

  ${device.mobileL} {
    &,
    span {
      display: inline-block;
      box-sizing: border-box;
      transition: all 0.4s;
    }
  }
  appearance: none;
  background: none;
  border: none;
  outline: none;

  inset: ${({ inNav }) => (inNav ? "2.3rem 1.9rem 0 0" : "")};

  position: ${({ inNav }) => (inNav ? "fixed" : "relative")};
  width: ${({ inNav }) => (inNav ? "2.3rem" : "3rem")};

  z-index: ${({ inNav }) => (inNav ? "999" : "unset")};

  height: 1.5rem;
  scale: 0.8;

  .menu_button_line {
    position: absolute;
    left: 0;
    width: 100%;
    height: 0.15rem;
    background: #233b5dab;
    border-radius: 0.2rem;

    &.top {
      top: 0;
    }
    &.mid {
      top: 0.65rem;
    }
    &.botm {
      bottom: 0;
    }
  }

  &.open {
    .menu_button_line {
      background: #233b5dab;

      &.top {
        transform: translateY(0.65rem) rotate(-45deg);
      }
      &.mid {
        opacity: 0;
      }
      &.botm {
        transform: translateY(-0.65rem) rotate(45deg);
      }
    }
  }
`;
