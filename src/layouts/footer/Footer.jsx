import styled from "styled-components";
import Logo from '/src/assets/images/logo/prosmm-header-logo.svg';

const Footer = () => {
  return <$Footer>
    <$Logo />
    <$Copyright>تمام حقوق اين وب‌سايت برای تیم پِرو اِس اِم اِم  است.</$Copyright>
  </$Footer>;
};

export default Footer;

const $Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  background-color: #252525;
`;

const $Logo = styled(Logo)`
  width: 9.5rem;
  margin-bottom: 1.2rem;

  & * {
    fill: #c7c7c7 !important;
  }
`;

const $Copyright = styled.p`
  font-size: .85rem;
  text-align: center;
  line-height: 1.7;
  color: #d7d7d7;
`;
