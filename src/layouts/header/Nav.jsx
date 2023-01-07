import Link from "next/link";
import styled from "styled-components";

const Nav = ({ items }) => {
  return (
    <$Nav>
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
  margin-bottom: .5em;
  display: flex;
  gap: 2.5rem;

  font-size: 1.1rem;

  a {
    transition: 100ms ease all;
    color: #ffffffc5;

    &:active, &:hover {
      color: #fff;
      font-weight: 400;
    }
  }
`;
