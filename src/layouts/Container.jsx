import { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "../styles/global";
import { headerRef } from "./header/Header";

const Container = forwardRef(function Container(
  { children, className, fullHeight },
  ref
) {
  const [height, setHeight] = useState("unset");

  useEffect(() => {
    if (!fullHeight || !headerRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      const headerHeight = headerRef.current.clientHeight;
      setHeight(headerHeight);
    });
    resizeObserver.observe(headerRef.current);

    return () => resizeObserver.disconnect();
  }, [fullHeight]);

  return (
    <$container ref={ref} Height={height} className={className}>
      {children}
    </$container>
  );
});

export default Container;

// Styles

const $container = styled.div`
  min-height: ${({ Height }) =>
    Height === "unset" ? "unset" : `calc(100dvh - ${Height}px)`};

  padding: 2rem 4rem;

  margin: 0 auto;
  width: 65rem;
  max-width: 100%;

  ${device.mobileS} {
    padding: 0;
  }
`;
