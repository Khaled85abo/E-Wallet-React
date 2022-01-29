import styled, { css } from "styled-components";

export const HomeWrapper = styled.main`
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
`;

export const Cards = styled.section`
  margin-top: 1rem;
  display: grid;
  grid-auto-rows: 4rem;
  article {
    margin-top: 0.1rem;
  }
`;

export const AddCardBtn = styled.button`
  width: 100%;
  border-radius: 8px;
  background: black;
  height: 72px;
  color: white;
  margin-top: 3rem;
  text-transform: uppercase;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  /* margin-top: ${(props) => (props.full ? "241px" : "1rem")}; */
  ${(props) => {
    switch (props.$state) {
      case "full":
        return css`
          margin-top: 241px;
        `;
      default:
        return css`
          margin-top: 1rem;
        `;
    }
  }}
`;
