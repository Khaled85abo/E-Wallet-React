import { useMemo, useCallback } from "react";
import { Flex, FlexCol } from "../globalStyles";
import { StyledCard, Span, JustifyCenter, ChipLogo } from "./Card.elements";
import { Chip, Wifi, Bitcoin, BlockChain, Ninja, Evil } from "../assets";
import Loogo from "../assets/Logo";
import WifiChip from "../assets/WifiChip";

const Card = ({ card, index, handleCardClicked }) => {
  console.log(index);
  const { owner, number, valid, vendor } = card;
  const SpacedCardNumber = useMemo(() => {
    let span = "";
    for (let i = 0; i < 16; i++) {
      if (i % 4 === 0) {
        span += " ";
      }
      if (number && number[i]) {
        span += number[i];
      } else {
        span += "x";
      }
    }

    return span;
  }, [number]);

  const month = useMemo(() => {
    let mo = "";

    for (let i = 0; i < 2; i++) {
      if (valid && valid[i]) {
        mo += valid[i];
      } else {
        mo += "M";
      }
    }

    return mo;
  }, [valid]);
  const year = useMemo(() => {
    let ye = "";

    for (let i = 2; i < 4; i++) {
      if (valid && valid[i]) {
        ye += valid[i];
      } else {
        ye += "Y";
      }
    }

    return ye;
  }, [valid]);

  // const Logo = useCallback(() => {
  //   switch (vendor) {
  //     case "Swedbank":
  //       return <Ninja />;
  //     case "Nordea":
  //       return <BlockChain />;
  //     case "Handelsbanken":
  //       return <Bitcoin />;
  //     default:
  //       return <Evil />;
  //   }
  // }, [vendor]);

  const chipColor =
    vendor === "Nordea" || vendor === "Handelsbanken" ? "white" : "black";
  return (
    <StyledCard
      $vendor={vendor}
      // onClick={(e) => handleCardClicked(e, index)}
    >
      <ChipLogo>
        <WifiChip color={chipColor} />
        <Loogo vendor={vendor} />
      </ChipLogo>
      <JustifyCenter>
        <Span>{SpacedCardNumber}</Span>
      </JustifyCenter>
      <Flex>
        <FlexCol left>
          <p>Card Holder</p>
          <h4>{owner ? owner : "Card Holder"}</h4>
        </FlexCol>
        <FlexCol>
          <p>ValidThru</p>
          <h4>
            {month}/{year}
          </h4>
        </FlexCol>
      </Flex>
    </StyledCard>
  );
};

export default Card;
