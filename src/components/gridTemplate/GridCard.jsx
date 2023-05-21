import styled from "styled-components";
import Image from "next/image";

import Glob from "/src/assets/images/icons/globe.png";
import Button from "../../common/Button";
import { device } from "../../styles/global";

const GridCard = ({ title, description, callToAction, bgColor, color }) => {
  return (
    <$Wrapper>
      <$Icon bgColor={bgColor}>
        <$Glob src={Glob} role="presentation" alt="glob" />
      </$Icon>
      <$Content>
        <$Title color={color}>{title}</$Title>
        <$Description color={color}>{description}</$Description>
        <$Button bgColor={bgColor ?? "168 158 255"}>{callToAction}</$Button>
      </$Content>
    </$Wrapper>
  );
};

export default GridCard;

const $Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3.8rem auto;
  gap: 1.5rem;

  padding: 1.5rem 0;

  ${device.mobileS} {
    gap: 0.5rem;
  }
`;

const $Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.8rem;
  aspect-ratio: 1;

  border-radius: 50%;
  background-color: rgb(
    ${({ bgColor }) => (bgColor ? bgColor : "168 158 255")}
  );
`;

const $Glob = styled(Image)`
  width: 2rem;
  height: 2rem;

  filter: brightness(0) invert(1);
`;

const $Content = styled.div`
  margin-top: 1.5rem;
`;

const $Title = styled.h3`
  margin-bottom: 0.7rem;
  font-size: 1.4rem;
  color: rgb(${(p) => p.color || "71 63 141"});
`;

const $Description = styled.p`
  margin-bottom: 1.6rem;

  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5em;
  color: rgb(${(p) => p.color || "71 63 141"});
`;

const $Button = styled(Button)`
  padding: 0.4rem 0.9rem;
  font-size: 1rem;
`;
