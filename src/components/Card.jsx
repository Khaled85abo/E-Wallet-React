import { useMemo, useCallback } from "react";

import {
  StyledCard,
  FlexCol,
  Flex,
  ChipLogo,
  Span,
} from "../styledComponents/StyledComponents";
import { Chip, Wifi, Bitcoin, BlockChain, Ninja, Evil } from "../assets";

const Card = ({ cvc, owner, cardNumber, valid, vendor }) => {
  const span1 = useMemo(() => {
    let span = "";
    for (let i = 0; i < 4; i++) {
      if (cardNumber && cardNumber[i]) {
        span += cardNumber[i];
      } else {
        span += "X";
      }
    }

    return span;
  }, [cardNumber]);

  const span2 = useMemo(() => {
    let span = "";
    for (let i = 4; i < 8; i++) {
      if (cardNumber && cardNumber[i]) {
        span += cardNumber[i];
      } else {
        span += "X";
      }
    }

    return span;
  }, [cardNumber]);
  const span3 = useMemo(() => {
    let span = "";
    for (let i = 8; i < 12; i++) {
      if (cardNumber && cardNumber[i]) {
        span += cardNumber[i];
      } else {
        span += "X";
      }
    }

    return span;
  }, [cardNumber]);
  const span4 = useMemo(() => {
    let span = "";
    for (let i = 12; i < 16; i++) {
      if (cardNumber && cardNumber[i]) {
        span += cardNumber[i];
      } else {
        span += "X";
      }
    }

    return span;
  }, [cardNumber]);
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

  const Logo = useCallback(() => {
    switch (vendor) {
      case "Swedbank":
        return <Ninja />;
      case "Nordea":
        return <BlockChain />;
      case "Handelsbanken":
        return <Bitcoin />;
      default:
        return <Evil />;
    }
  }, [vendor]);

  const chipColor =
    vendor === "Nordea" || vendor === "Handelsbanken" ? "white" : "black";
  return (
    <StyledCard $vendor={vendor}>
      <ChipLogo>
        <FlexCol>
          <Wifi color={chipColor} />
          <Chip color={chipColor} />
        </FlexCol>
        <Logo />
      </ChipLogo>
      <Flex>
        <Span>{span1}</Span>
        <Span>{span2}</Span>
        <Span>{span3}</Span>
        <Span>{span4}</Span>
      </Flex>
      <Flex>
        <FlexCol>
          <h4>name</h4>
          <h4>{owner ? owner : "Card Owner"}</h4>
        </FlexCol>
        <FlexCol>
          <h4>ValidThru</h4>
          <h4>
            {month}/{year}
          </h4>
        </FlexCol>
      </Flex>
    </StyledCard>
  );
};

export default Card;
