import { useState } from "react";
import {
  Form,
  Input,
  Submit,
  Label,
  Select,
  Flex,
  MaxWidth45,
} from "../styledComponents/StyledComponents";
import Card from "../components/Card";

const AddCard = ({ setCards }) => {
  const [cardNumber, setCardNumber] = useState(null);
  const [owner, setOwner] = useState(null);
  const [valid, setValid] = useState(null);
  const [cvc, setCvc] = useState(null);
  const [vendor, setVendor] = useState(null);
  const handleSubmitCard = (e) => {
    e.preventDefault();
    const card = {
      number: cardNumber,
      owner: owner,
      valid: valid,
      cvc: cvc,
      vendor: vendor,
    };
    console.log(card);
    setCards((oldArr) => [...oldArr, card]);
  };
  return (
    <div className="App">
      <Card
        cardNumber={cardNumber}
        owner={owner}
        valid={valid}
        cvc={cvc}
        vendor={vendor}
      />
      <Form onSubmit={handleSubmitCard}>
        <Label>Card Number</Label>
        <Input
          placeholder="Enter card number"
          id="card-number"
          type="number"
          min={16}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <Label>Card Owner</Label>
        <Input
          type="text"
          id="owner"
          placeholder="Full name"
          onChange={(e) => setOwner(e.target.value)}
        />
        <Flex>
          <MaxWidth45>
            <Label>ValidThru</Label>

            <Input
              type="number"
              placeholder="Validity"
              onChange={(e) => setValid(e.target.value)}
            />
          </MaxWidth45>{" "}
          <MaxWidth45>
            <Label>CvC</Label>
            <Input
              type="number"
              placeholder="CvC number"
              onChange={(e) => setCvc(e.target.value)}
            />
          </MaxWidth45>
        </Flex>
        <Select onChange={(e) => setVendor(e.target.value)}>
          <option value="default">Choose Vendor</option>
          <option value="Nordea">Nordea</option>
          <option value="Swedbank">Swedbank</option>
          <option value="Handelsbanken">Handelsbanken</option>
        </Select>

        <Submit type="submit" />
      </Form>
    </div>
  );
};

export default AddCard;
