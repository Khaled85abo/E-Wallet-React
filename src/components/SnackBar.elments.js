import styled, { css } from "styled-components";

export const SnackBarDiv = styled.div`
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translateX(-50%);
  * {
    padding: 0 0.5rem;
  }
  button {
    padding: 0.5rem 1rem;
    border: 1px solid black;
    border-radius: 8px;
    text-transform: uppercase;
  }
  /*
  *Adding conditional styling
  */
  /* ${(props) =>
    props.error &&
    css`
      background: red;
    `}
  background: ${(props) => (props.error ? "red" : "lightGray")}; */
  // $type='error'
  ${(props) => {
    switch (props.$type) {
      case "error":
        return css`
          background: red;
        `;
      case "success":
        return css`
          background: green;
        `;
      case "info":
        return css`
          background: blue;
        `;
      default:
        return css`
          background: lightGray;
        `;
    }
  }}
`;
