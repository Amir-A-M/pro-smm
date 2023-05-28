import styled from "styled-components";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShowMore = (props) => {
  return (
    <div>
      <$Button {...props}>
        نمونه کار بیشتر
        <FontAwesomeIcon icon={faAngleDown} />
      </$Button>
    </div>
  );
};

export default ShowMore;

const $Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  margin: 2.5rem auto 0;

  font-size: 1.3rem;
  color: #393380;
  background-color: transparent;
  cursor: pointer;

  svg {
    transition: translate 150ms ease-in;
  }
  &:hover svg {
    translate: 0 .2rem;
  }
`;
