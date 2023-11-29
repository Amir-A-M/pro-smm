import styled from "styled-components";
import SectionTitle from "../../common/SectionTitle";
import Container from "../../layouts/Container";
import TabMenu from "../tabs/TabMenu";
import { useEffect, useState } from "react";
import ImageGrid from "./ImageGrid";
import ShowMore from "../../common/ShowMore";

const Gallery = () => {
  const [tabItemHovered, setTabItemHovered] = useState();

  const defaultMaxItems = 9;
  const maxItemsIncrementCount = 3;
  const [maxItems, setMaxItems] = useState(9);

  const [items, setItems] = useState([
    { src: "./images/work-sample/1.jpg", href: "", alt: "" },
    { src: "./images/work-sample/2.jpg", href: "", alt: "" },
    { src: "./images/work-sample/3.jpg", href: "", alt: "" },
    { src: "./images/work-sample/4.jpg", href: "", alt: "" },
    { src: "./images/work-sample/5.jpg", href: "", alt: "" },
    { src: "./images/work-sample/6.jpg", href: "", alt: "" },
    { src: "./images/work-sample/7.jpg", href: "", alt: "" },
    { src: "./images/work-sample/8.jpg", href: "", alt: "" },
    { src: "./images/work-sample/9.jpg", href: "", alt: "" },
    { src: "./images/work-sample/1.jpg", href: "", alt: "" },
    { src: "./images/work-sample/1.jpg", href: "", alt: "" },
    { src: "./images/work-sample/1.jpg", href: "", alt: "" },
  ]);

  const [data, setData] = useState([
    {
      name: "همه",
      active: true,
      items: items,
    },
    {
      name: "وبسایت",
      items: [...items].sort(function () {
        return 0.5 - Math.random();
      }),
    },
    {
      name: "گرافیک",
      items: [...items].sort(function () {
        return 0.5 - Math.random();
      }),
    },
  ]);

  const getActiveItems = () => {
    const activeCategory = data.find((category) => category.active);
    return activeCategory?.items || [];
  };

  const handleTabClick = (name) => {
    const newData = data.map((category) => {
      return {
        ...category,
        active: category.name === name ? true : false,
      };
    });

    setData(newData);
    setMaxItems(defaultMaxItems);
  };

  const handleTabItemHover = (isMouseIn) => {
    setTabItemHovered(isMouseIn);
  };

  const handleShowMoreClick = () => {
    // undefined is no maxItems
    setMaxItems(
      maxItemsIncrementCount ? maxItems + maxItemsIncrementCount : undefined
    );
  };

  return (
    <$Wrapper id="works">
      <Container>
        <$SectionTitle>نمونه کارها</$SectionTitle>

        <TabMenu
          items={data.map(({ name, active }) => {
            return { name, active };
          })}
          onClick={handleTabClick}
          onMouseEnter={() => handleTabItemHover(true)}
          onMouseLeave={() => handleTabItemHover(false)}
          className={tabItemHovered ? "itemHovered" : ""}
        />

        <ImageGrid items={getActiveItems()} maxItems={maxItems} />

        {getActiveItems().length > maxItems ? (
          <ShowMore onClick={handleShowMoreClick} />
        ) : (
          ""
        )}
      </Container>
    </$Wrapper>
  );
};

export default Gallery;

const $Wrapper = styled.section`
  padding-bottom: 2.5rem;
`;

const $SectionTitle = styled(SectionTitle)`
  margin: 1.5rem auto 1.7rem;
`;
