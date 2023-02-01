import styled from "styled-components";

const HeroTitle = ({ title, primary }) => {
  return (
    <$Title>
      {title}
      <span>{primary}</span>
    </$Title>
  );
};

export default HeroTitle;

// Styles

const $Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.6em;

  color: rgb(136, 128, 206);

  span {
    display: block;
    color: rgb(71, 63, 141);
  }
`;
