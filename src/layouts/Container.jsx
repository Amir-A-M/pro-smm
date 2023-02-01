import styled from "styled-components";

const Container = ({ children, className }) => {
  return <$container className={className}>{children}</$container>;
};

export default Container;

// Styles

const $container = styled.div`
  padding: 2rem 4rem;

  margin: auto;
  width: 65rem;
  max-width: 100%;
`;
