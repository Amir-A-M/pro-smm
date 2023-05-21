import styled from "styled-components";
import Container from "../../layouts/Container";
import GridCard from "./GridCard";
import HeroImage from "./../../assets/images/hero/hero-image.svg";
import { device } from "../../styles/global";
import Image from "next/image";

const GridTemplate = () => {
  const data = [
    {
      title: "طراحی سایت حرفه‌ای",
      description: "طراحی کامل سایت به صورت رسپانسیو و سئو شده",
      callToAction: "سفارش طراحی سایت",
      imageSrc: "/svg/web_dev_pic.svg",
    },
    {
      title: "طراحی گرافیک",
      description: "طراحی لوگو، UI/UX، سوشال مدیا و بنر تبلیغاتی",
      callToAction: "سفارش طراحی گرافیک",
      imageSrc: "/svg/design_pic.svg",
      color: '27 114 188',
      bgColor: '108 187 255',
    },
  ];

  return (
    <$Section>
      <$Container>
        {data.map((item, i) => {
          if (i % 2)
            return (
              <>
                <$Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={400}
                  height={300}
                />
                <GridCard {...item} />
              </>
            );

          return (
            <>
              <GridCard {...item} />
              <$Image
                src={item.imageSrc}
                alt={item.title}
                width={400}
                height={300}
              />
            </>
          );
        })}
      </$Container>
    </$Section>
  );
};

export default GridTemplate;

const $Section = styled.section`
padding: 1rem 0;
background-color: #f6f5ff;
`;

const $Container = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: row;
  gap: 2rem;

  ${device.mobileL} {
    grid-template-columns: 1fr;
  }
  ${device.mobileS} {
    padding: 1rem 2rem;
  }
`;

const $Image = styled(Image)`
  width: auto;
  margin: 0 auto;

  ${device.mobileS} {
    max-height: 12rem;
  }
`;
