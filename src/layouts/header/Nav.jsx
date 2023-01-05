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
  display: flex;
  gap: 2rem;
`;
