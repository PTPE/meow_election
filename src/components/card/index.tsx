import styled from "styled-components";

type CardThemeType = "primary" | "secondary";

interface CardProps {
  theme?: CardThemeType;
  children: React.ReactNode;
}

const StyledCardWrapper = styled.div`
  position: relative;
  display: inline-block;
  background: red;
`;

const StyledCardBase = styled.div`
  border: 4px solid #0E4FDD;
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background:white;
`;



const StyledCardFirst = styled(StyledCardBase)`
  left: 6px;
  top: 6px;
  z-index: 2;
`;

const StyledCardSecond = styled(StyledCardBase)`
  left: 12px;
  top: 12px;
  z-index: 1;
`;

const StyledCard = styled.div<{ $theme: CardThemeType }>`
  display: inline-block;
  padding: 24px;
  background-color: ${(props) =>
    props.$theme === "primary" ? "#0E4FDD" : "white"};
  color: ${(props) => (props.$theme === "primary" ? "white" : "#0E4FDD")};
  position: relative;
  z-index: 3;
  border:4px solid #0E4FDD;
`;

export function Card({ children, theme = "secondary" }: CardProps) {
  return (
    <StyledCardWrapper>
      <StyledCard $theme={theme}>{children}</StyledCard>
      <StyledCardFirst />
      <StyledCardSecond  />
    </StyledCardWrapper>
  );
}
