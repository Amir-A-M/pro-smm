import styled from "styled-components";

const Container = ({ children }) => {
  return <$container>{children}</$container>;
};

export default Container;

// Styles

const $container = styled.div`
  margin: auto;
  width: 65rem;
  max-width: 100%;
`;
