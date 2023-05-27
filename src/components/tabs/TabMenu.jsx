import styled from "styled-components";
import TabItem from "./TabItem";

const TabMenu = ({ className, items, onClick, ...rest }) => {
  return (
    <$TabMenu className={className}>
      {items.map((item, i) => (
        <TabItem key={i} {...item} {...rest} onClick={() => onClick(item.name)}>
          {item.name}
        </TabItem>
      ))}
    </$TabMenu>
  );
};

export default TabMenu;

const $TabMenu = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
`;
