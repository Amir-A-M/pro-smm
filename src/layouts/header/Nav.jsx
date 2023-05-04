import Link from "next/link";
import styled from "styled-components";
import { device } from "../../styles/global";

const Nav = ({ items, isOpen }) => {
  return (
    <$Nav isOpen={isOpen}>
      {items.map(({ link, text }) => (
        <Link href={link} key={text}>
          {text}
        </Link>
      ))}
    </$Nav>
  );
};

export default Nav;

const $Nav = styled.nav`
  display: flex;
  gap: 2.5rem;

  font-size: 1.1rem;

  a {
    transition: all 100ms ease-in-out;
    color: #000000c5;

    ${device.mobileL} {
      font-weight: 400;

      transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
      ${({ isOpen }) => {
        if (!isOpen) return;

        let str = "";
        for (let i = 0; i < 6; i++) {
          str += `
        &:nth-child(${i}) {
        transition: transform 200ms ${i * 80}ms ease-in-out;
        }
        `;
        }
        return str;
      }}
    }

    &:active,
    &:hover {
      color: #000;
      font-weight: 400;

      ${device.mobileL} {
        font-weight: 500;
      }
    }
  }

  ${device.mobileL} {
    flex-direction: column;
    gap: 1.8rem;

    a {
      padding: 0.5rem;
    }
  }
`;
