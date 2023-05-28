import Image from "next/image";
import styled from "styled-components";
import bgImage from '/src/assets/images/people_working.jpg';
import Container from "../layouts/Container";
import { device } from "../styles/global";

const Statistics = () => {
  const data = ["74 پروژه موفق", "+4 سال سابقه", "+400 مشتری راضی"];

  return (
    <$Wrapper>
      <$Image src={bgImage} alt="people working" />
      <$overlay />
      <$Container>
        {data.map((item, i) => (
          <$Item key={i}>{item}</$Item>
        ))}
      </$Container>
    </$Wrapper>
  );
};

export default Statistics;

const $Wrapper = styled.section`
  position: relative;
  height: 12rem;

  ${device.mobileM} {
    height: 15rem;
  }
`;

const $Image = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -1;
`;

const $overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(98 90 168 / .9);
  z-index: -1;
`;

const $Container = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  height: 100%;

  ${device.mobileM} {
    padding: 1.5rem;
  }
  ${device.mobileS} {
    flex-direction: column;
  }
`;

const $Item = styled.span`
  font-size: 1.5rem;
  color: #fff;
`;
