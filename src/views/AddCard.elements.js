import styled from "styled-components";

export const Form = styled.form`
  max-width: 350px;
  margin: 2rem auto 1rem auto;
  font-size: 1.3rem;
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
  text-transform: uppercase;
  font-size: 1.3rem;
`;

export const MaxWidth45 = styled.div`
  max-width: 45%;
`;
