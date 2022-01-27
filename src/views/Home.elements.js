import styled from "styled-components";

export const HomeWrapper = styled.main`
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
`;

export const Cards = styled.section`
  display: grid;
  grid-auto-rows: 4rem;
  grid-template-columns: 1fr;
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
  margin-top: 241px;
  margin-bottom: 1rem;
`;
