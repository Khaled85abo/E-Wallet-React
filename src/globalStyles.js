import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;
export default GlobalStyles;
