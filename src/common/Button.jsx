import styled from "styled-components";

const Button = ({ children, link, rgb }) => {
  return (
    <$A rgb={rgb} href={link}>
      {children}
    </$A>
  );
};

export default Button;

// Styles

const $A = styled.a`
  padding: 0.45rem 1.3rem 0.4rem 1.3rem;
  font-size: 0.8rem;
  color: rgb(255, 255, 255);

  border-radius: 1rem;
  background-color: rgb(${(p) => p.rgb || "94, 163, 222"});
  box-shadow: 0 0 2rem 0.1rem rgba(${(p) => p.rgb || "94, 163, 222"}, 0.6);

  cursor: pointer;
  user-select: none;

  transition: 120ms ease-in scale;
  &:hover {
    scale: 1.05;
  }
  &:active {
    scale: 0.95;
  }
`;
