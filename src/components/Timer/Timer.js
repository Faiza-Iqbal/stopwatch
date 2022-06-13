import React from "react";
import useTimeConversion from "../../hooks/useTimeConversion";
import { StyledSub } from "../../styles/subscript.style";
import { StyledTimer } from "./Timer.style";

const Timer = ({ totalMilliseconds }) => {
  const currentTimeObject = useTimeConversion(totalMilliseconds);
  return (
    <StyledTimer>
      {currentTimeObject.hours}:{currentTimeObject.minutes}:
      {currentTimeObject.seconds}:{currentTimeObject.milliSeconds[0]}
      <StyledSub>
        {currentTimeObject.milliSeconds[1] + currentTimeObject.milliSeconds[2]}
      </StyledSub>
    </StyledTimer>
  );
};
export default Timer;
