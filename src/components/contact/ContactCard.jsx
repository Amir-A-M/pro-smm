import styled from "styled-components";
import Telegram from "/src/assets/images/icons/telegram.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { device } from "../../styles/global";

const ContactCard = ({
  title,
  description,
  contactAddresses = [],
  color = "#fff",
  border = "#fff",
  bg = "transparent",
}) => {
  const renderIcon = (icon) => {
    switch (icon) {
      case "phone":
        return <FontAwesomeIcon icon={faPhone} />;
      case "telegram":
        return <Telegram />;
      case "mail":
        return <FontAwesomeIcon icon={faEnvelope} />;

      default:
        return "";
    }
  };

  return (
    <$Card color={color} bg={bg} border={border}>
      <$Title>{title}</$Title>
      <$Description>{description}</$Description>
      {contactAddresses.map(({ text, icon, href }, i) => (
        <$ContactAddress key={i} href={href}>
          <$Icon color={color}>{renderIcon(icon)}</$Icon>
          <span>{text}</span>
        </$ContactAddress>
      ))}
    </$Card>
  );
};

export default ContactCard;

const $Card = styled.div`
  padding: 2.5rem 2.5rem 4rem;

  ${device.mobileS} {
    padding: 2.5rem 1.4rem 4rem;
  }

  &,
  & * {
    color: ${(p) => p.color};
    fill: ${(p) => p.color};
  }
  background-color: ${(p) => p.bg};
  border: 0.2rem ${(p) => p.border} solid;
`;

const $Title = styled.h4`
  font-size: 1.385rem;
  margin-bottom: 1.8rem;
`;

const $Description = styled.p`
  font-size: 0.91rem;
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 2.8rem;
`;

const $ContactAddress = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: 0.89rem;
  font-weight: 400;
  margin-bottom: 1rem;

  span {
    text-align: right;
    direction: ltr;
  }
`;

const $Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  aspect-ratio: 1;

  border: 2px solid ${(p) => p.color};
  border-radius: 50%;

  svg {
    width: 0.7rem;
    font-size: 0.7rem;
  }
`;
