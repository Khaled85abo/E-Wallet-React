import { useState, useReducer } from "react";
import {
  Form,
  Input,
  Submit,
  Label,
  Select,
  MaxWidth45,
} from "./AddCard.elements";
import { Flex } from "../globalStyles";
import Card from "../components/Card";

const cardReducer = (state, action) => {
  switch (action.type) {
    case "number":
      return {
        ...state,
        number: action.payload,
      };
    case "owner":
      return {
        ...state,
        owner: action.payload,
      };
    case "vendor":
      return {
        ...state,
        vendor: action.payload,
      };
    case "cvc":
      return {
        ...state,
        cvc: action.payload,
      };
    case "valid":
      return {
        ...state,
        valid: action.payload,
      };
  }
};

const initialCard = {
  number: "",
  owner: "",
  cvc: "",
  valid: "",
  vendor: "",
};

const AddCard = ({ handleCardAdded }) => {
  const [card, dispatch] = useReducer(cardReducer, initialCard);
  const { number, owner, valid, vendor, cvc } = card;
  //   const [card, setCard] = useState({
  //     number: "",
  //     valid: "",
  //     owner: "",
  //     vendor: "",
  //     cvc: "",
  //   });

  const handleSubmitCard = (e) => {
    e.preventDefault();
    handleCardAdded(card);
  };
  return (
    <div className="App">
      <Card card={card} />
      <Form onSubmit={handleSubmitCard}>
        <Label>Card Number</Label>
        <Input
          placeholder="Enter card number"
          id="card-number"
          type="number"
          onChange={(e) =>
            dispatch({ type: "number", payload: e.target.value })
          }
        />
        <Label>Card Holder</Label>
        <Input
          type="text"
          id="owner"
          placeholder="Full name"
          onChange={(e) => dispatch({ type: "owner", payload: e.target.value })}
        />
        <Flex>
          <MaxWidth45>
            <Label>ValidThru</Label>

            <Input
              type="number"
              placeholder="Validity"
              onChange={(e) =>
                dispatch({ type: "valid", payload: e.target.value })
              }
            />
          </MaxWidth45>{" "}
          <MaxWidth45>
            <Label>CvC</Label>
            <Input
              type="number"
              placeholder="CvC number"
              onChange={(e) =>
                dispatch({ type: "cvc", payload: e.target.value })
              }
            />
          </MaxWidth45>
        </Flex>
        <Select
          onChange={(e) =>
            dispatch({ type: "vendor", payload: e.target.value })
          }
        >
          <option value="Nordea">Nordea</option>
          <option value="default">Choose Vendor</option>
          <option value="Swedbank">Swedbank</option>
          <option value="Handelsbanken">Handelsbanken</option>
        </Select>

        <Submit type="submit" />
      </Form>
    </div>
  );
};

export default AddCard;
