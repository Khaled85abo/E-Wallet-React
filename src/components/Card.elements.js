import styled, { css } from "styled-components";
import { Flex } from "../globalStyles";
export const StyledCard = styled.article`
  padding: 1rem;
  width: 382px;
  height: 241px;
  margin: 1rem auto;
  border-radius: 8px;
  box-shadow: 0px 0px 15px 1px black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-transform: uppercase;
  ${(props) => {
    switch (props.$vendor) {
      case "Swedbank":
        return css`
          background: #c59801;
        `;
      case "Nordea":
        return css`
          background: #0a126e;
          color: #ece6e6;
        `;
      case "Danskbank":
        return css`
          background: #002c44;
        `;
      case "Handelsbanken":
        return css`
          background: #6a6a69;
          color: lightGray;
        `;
      default:
        return css`
          background: lightGray;
        `;
    }
  }}
`;

export const JustifyCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const ChipLogo = styled(Flex)`
  align-items: center;
`;
export const Span = styled.span`
  font-size: 2.1rem;
`;
