import React from "react";
import useTimeConversion from "../../hooks/useTimeConversion";
import { SubStyled } from "../../styles/Subscript.style";
import { TimerStyled } from "./Timer.style";

const Timer = ({ totalMilliseconds }) => {
  const currentTimeObject = useTimeConversion(totalMilliseconds);
  return (
    <TimerStyled>
      {currentTimeObject.hours}:{currentTimeObject.minutes}:
      {currentTimeObject.seconds}:{currentTimeObject.milliSeconds[0]}
      <SubStyled>
        {currentTimeObject.milliSeconds[1] + currentTimeObject.milliSeconds[2]}
      </SubStyled>
    </TimerStyled>
  );
};
export default Timer;
