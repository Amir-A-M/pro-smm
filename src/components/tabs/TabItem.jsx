import styled from "styled-components";

/**
 *
 * @param {boolean} active
 * @returns
 */
const TabItem = ({ children, ...rest }) => {
  return <$Button {...rest}>{children}</$Button>;
};

export default TabItem;

const $Button = styled.button`
  padding: 1rem;

  font-size: 1.1rem;

  cursor: pointer;
  color: ${(p) => (p.active ? "#6f62de" : "#8f8e91")};
  .itemHovered & {
    color: #8f8e91;
  }
  .itemHovered &:hover {
    color: #6f62de;
  }
  background-color: transparent;
  transition: 130ms all ease;

  &:hover {
    color: #6f62de;
  }

  &::after {
    content: "";
    display: block;
    margin: 0.2rem auto 0;
    width: 0.3rem;
    aspect-ratio: 1;

    border-radius: 50%;
    background-color: #6f62de;

    opacity: 0;
    transform: translateY(-0.4rem);
    transition: 150ms all ease;
  }

  ${(p) => {
    if (p.active) {
      return `
      &::after {
        opacity: 1;
        transform: translateY(0);
      }
      .itemHovered &::after {
        opacity: 0;
        transform: translateY(-0.4rem);
      }
      `;
    }
  }}
  
  &:hover::after {
    opacity: 1;
    transform: translateY(0);
  }
`;
