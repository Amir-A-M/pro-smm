import styled from "styled-components";

const SectionTitle = ({ children, bg, color, className }) => {
  return (
    <$heading bg={bg} color={color} className={className}>
      {children}
    </$heading>
  );
};

export default SectionTitle;

// Styles

const $heading = styled.h1`
  width: fit-content;
  padding: 0.8rem 1.4rem;

  font-size: 1.4rem;
  color: ${({color})=> color ?? 'rgb(255, 255, 255)'};

  border-radius: 1.5rem;
  background-color: rgb(${(p) => p.rgb ?? "158 147 255"});
  box-shadow: 0 0 2rem 0.1rem rgba(${(p) => p.rgb ?? "158 147 255"}/ 0.6);
`;
