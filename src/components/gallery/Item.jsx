import Image from "next/image";
import styled from "styled-components";

const Item = ({ href, src, alt }) => {
  return (
    <$Wrapper>
      <a href={href}>
        <Image
          alt={alt}
          src={src}
          width={720}
          height={480}
          loading="lazy"
        />
      </a>
    </$Wrapper>
  );
};

export default Item;

const $Wrapper = styled.div`
  height: 17rem;
  background-color: #0000001c;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;
  }
`;
