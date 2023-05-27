import styled from "styled-components";
import Item from "./Item";
import { device } from "../../styles/global";

const ImageGrid = ({ items, maxItems }) => {
  const limitedItems = items.slice(0, maxItems);

  return (
    <$Wrapper>
      {limitedItems.map((item, i) => (
        <Item {...item} key={i} />
      ))}
    </$Wrapper>
  );
};

export default ImageGrid;

const $Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  margin-top: 2rem;

  ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${device.mobileM} {
    grid-template-columns: 1fr;
  }
  ${device.mobileS} {
    padding: 0 2.5rem;
  }
`;
