import styled from "styled-components";
import Container from "../../layouts/Container";
import Image from "next/image";
import bgImage from "/src/assets/images/contact_us.jpg";
import SectionTitle from "../../common/SectionTitle";
import ContactCard from "./ContactCard";
import { device } from "../../styles/global";

const ContactUs = () => {
  return (
    <$Wrapper>
      <$Image src={bgImage} alt="people working" />
      <$overlay />
      <$Container>
        <$SectionTitle color="#8274ff" bg="246 245 255">
          ارتباط باما
        </$SectionTitle>
        <$CardGrid>
          <ContactCard
            title={"سفارش طراحی سایت"}
            description={
              "جهت همکاری برای طراحی سایت به صورت کاملا سئو شده و ریسپانسیو به صورت حرفه ای، از طریق راه های ارتباطی زیر با ما در ارتباط شوید."
            }
            contactAddresses={[
              {
                icon: "phone",
                text: "+98 991 923 4495",
                href: "tel:09919234495",
              },
              {
                icon: "telegram",
                text: "@MohsenFazeli_ir",
                href: "https://t.me/MohsenFazeli_ir",
              },
              { icon: "mail", text: "Mohsenfazeli2005@Gmail.com", href: "#" },
            ]}
          />
          <ContactCard
            title={"سفارش طراحی گرافیک"}
            description={
              "جهت همکاری برای طراحی لوگو، UI/UX، بنر تبلیغاتی و سوشال مدیا از طریق راه های ارتباطی زیر با ما در ارتباط شوید."
            }
            bg="rgb(255 255 255 / .87)"
            color="#675eb7"
            border="transparent"
            contactAddresses={[
              {
                icon: "phone",
                text: "+98 991 923 4495",
                href: "tel:09919234495",
              },
              {
                icon: "telegram",
                text: "@MohsenFazeli_ir",
                href: "https://t.me/MohsenFazeli_ir",
              },
              { icon: "mail", text: "Mohsenfazeli2005@Gmail.com", href: "#" },
            ]}
          />
        </$CardGrid>
      </$Container>
    </$Wrapper>
  );
};

export default ContactUs;

const $Wrapper = styled.section`
  position: relative;
`;

const $Container = styled(Container)`
  ${device.mobileS} {
    padding: 2rem 1.5rem;
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
  background-color: rgba(30 26 110 / 0.8);
  z-index: -1;
`;

const $SectionTitle = styled(SectionTitle)`
  margin: 0 auto 3rem;
`;

const $CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;
