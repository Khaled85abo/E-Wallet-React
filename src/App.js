import {
  StyledCard,
  FlexCol,
  Flex,
  ChipLogo,
  Span,
  Form,
  Input,
  Submit,
  Label,
  Select,
} from "./styledComponents/StyledComponents";
import { Chip, Wifi, Bitcoin, BlockChain, Ninja, Evil } from "./assets";
import React from "react";
function App() {
  return (
    <div className="App">
      <StyledCard>
        <ChipLogo>
          <FlexCol>
            <Wifi />
            <Chip />
          </FlexCol>
          <Evil />
        </ChipLogo>
        <Flex>
          <Span>XXXX</Span>
          <Span>XXXX</Span>
          <Span>XXXX</Span>
          <Span>XXXX</Span>
        </Flex>
        <Flex>
          <FlexCol>
            <h4>name</h4>
            <h4>Card holder name</h4>
          </FlexCol>
          <FlexCol>
            <h4>Validality</h4>
            <h4>MM/YY</h4>
          </FlexCol>
        </Flex>
      </StyledCard>
      <Form>
        <Label>Card Number</Label>
        <Input
          placeholder="Enter card number"
          id="card-number"
          type="number"
          min="16"
        />
        <Label>Card Owner</Label>
        <Input type="text" id="owner" placeholder="Full name" />
        <Submit type="submit" />
      </Form>
    </div>
  );
}

export default App;
