import styled from "styled-components";
import Container from "../../layouts/Container";
import SectionTitle from "../../common/SectionTitle";
import { device } from "../../styles/global";

const About = () => {
  return (
    <$Wrapper id="about">
      <$Container>
        <$SectionTitle>درباره ما</$SectionTitle>
        <$p>
          تیم طراحی سایت <strong>پرو اس ام ام</strong> با طراحی وب ریسپانسیو و
          کاملا سفارشی براساس نیاز و سلیقه کارفرما، سایتی منحصربفرد و ویژه را
          برای مشتریان طراحی و پیاده‌سازی می‌نماید. در کدنویسی قالب طراحی سایت
          حرفه ای تمامی اصول اولیه سئو سایت مطابق با استانداردهای روز رعایت
          می‌شود.
        </$p>
      </$Container>
    </$Wrapper>
  );
};

export default About;

// Styles
const $Wrapper = styled.section`
  background-color: #fff;

  border-top-left-radius: 10rem 8rem;
  box-shadow: -20px 17px 300px 0px #8880ce8f;

  ${device.mobileM} {
    border-top-left-radius: 7rem 6rem;
  }
`;

const $Container = styled(Container)`
  position: relative;

  max-width: 35rem;
  width: 100%;
  padding: 3rem 3rem 2rem;
`;

const $SectionTitle = styled(SectionTitle)`
  position: absolute;
  top: -1.5rem;
  left: 50%;
  translate: -50% 0;

  margin: 0;
`;

const $p = styled.p`
  color: #473f8d;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.7;
`;
