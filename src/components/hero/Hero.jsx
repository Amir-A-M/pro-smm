import styled from "styled-components";
import Container from "../../layouts/Container";
import Button from "../../common/Button";
import HeroTitle from "./HeroTitle";
import HeroImage from "./../../assets/images/hero/hero-image.svg";
import Wave from "./../../assets/images/hero/wave.svg";
import WaveFade from "./../../assets/images/hero/wave-fade.svg";

const Hero = () => {
  return (
    <$Container>
      <$Content>
        <HeroTitle title="طراحی سایت با" primary="پرو‌اس‌اس‌ام" />
        <$ButtonWrapper>
          <Button text="نمونه کارها" rgb="136, 128, 206" />
          <Button text="سفارش طراحی سایت" />
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
  );
};

export default Hero;

// Styles

const $Container = styled(Container)`
  position: relative;
  height: 80vh;

  display: flex;
  justify-content: space-between;
`;

const $Content = styled.div`
  translate: 2rem -1rem;
`;

const $Image = styled.div`
  width: 60%;
`;

const $Waves = styled.div`
  svg {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: -2;
  }
`;

const $ButtonWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;
