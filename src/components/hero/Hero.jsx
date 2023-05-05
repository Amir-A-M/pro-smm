import styled from "styled-components";
import Container from "../../layouts/Container";
import Button from "../../common/Button";
import HeroTitle from "./HeroTitle";
import HeroImage from "./../../assets/images/hero/hero-image.svg";
import Wave from "./../../assets/images/hero/wave.svg";
import WaveFade from "./../../assets/images/hero/wave-fade.svg";
import { device } from "../../styles/global";

const Hero = () => {
  return (
    <$Wrapper>
      <$Container fullHeight>
        <$Content>
          <HeroTitle title="طراحی سایت با" primary="پرو‌اس‌اس‌ام" />
          <$ButtonWrapper>
            <Button rgb="136, 128, 206">نمونه کارها</Button>
            <Button>سفارش طراحی سایت</Button>
          </$ButtonWrapper>
        </$Content>
        <$Image>
          <HeroImage />
        </$Image>
        <$Waves>
          <WaveFade />
          <Wave />
        </$Waves>
      </$Container>
    </$Wrapper>
  );
};

export default Hero;

// Styles

const $Wrapper = styled.section`
  position: relative;
`;

const $Container = styled(Container)`
  display: flex;
  justify-content: space-between;

  ${device.mobileL} {
    flex-direction: column;
    justify-content: center;
  }
  ${device.mobileS} {
    padding: 5rem 0 0;
  }
`;

const $Content = styled.div`
  translate: 2rem 0;

  ${device.mobileL} {
    translate: 0;
    text-align: center;
  }
`;

const $Image = styled.div`
  width: 60%;

  ${device.tablet} {
    width: 50%;
  }
  ${device.mobileL} {
    width: 100%;
    padding: 3rem 2rem;
  }
`;

const $Waves = styled.div`
  svg {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -2;
  }
`;

const $ButtonWrapper = styled.div`
  display: flex;
  gap: 1.5rem;

  ${device.mobileL} {
    justify-content: center;
  }
`;
