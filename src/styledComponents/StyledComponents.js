import styled, { css } from "styled-components";

export const StyledCard = styled.article`
  padding: 1rem;
  width: 382px;
  height: 241px;
  margin: 1rem auto;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 5px black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${(props) => {
    switch (props.$vendor) {
      case "Nordea":
        return css`
          background: #0a126e;
          color: #ece6e6;
        `;
      case "Swedbank":
        return css`
          background: #c59801;
        `;
      case "Danskbank":
        return css`
          background: #002c44;
        `;
      case "Handelsbanken":
        return css`
          background: #6a6a69;
        `;
      default:
        return css`
          background: lightGray;
        `;
    }
  }}
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChipLogo = styled(Flex)`
  align-items: flex-start;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Span = styled.span`
  font-size: 1.55rem;
`;

export const Form = styled.form`
max-width: 350px;
margin: 2rem auto 0 auto;
text-align: left:
text-transform: uppercase;
`;

export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
  padding: 1rem;
  display: block;
  width: 100%;
  border-radius: 8px;
  height: 56px;
  margin: 0.1rem 0 1rem 0;
  font-size: 1.3rem;
  border: 1px black solid;
`;
export const Select = styled.select`
  padding: 1rem;
  display: block;
  width: 100%;
  border-radius: 8px;
  height: 56px;
  margin: 0.1rem 0 1rem 0;
  font-size: 1.3rem;
  border: 1px black solid;
`;
export const Submit = styled(Input)`
  background: black;
  height: 72px;
  color: white;
  margin-top: 3rem;
`;
