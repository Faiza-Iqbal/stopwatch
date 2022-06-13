import React from "react";
import useTimeConversion from "../../hooks/useTimeConversion";
import { StyledSplitTime } from "./SplitTime.style";
export const SplitTime = React.memo(({ splitTimeState }) => {
  const currentTimeObject = useTimeConversion(splitTimeState);
  return (
    <>
      {!splitTimeState && <StyledSplitTime>Split Time</StyledSplitTime>}
      {splitTimeState != 0 && (
        <StyledSplitTime>
          {currentTimeObject.hours}:{currentTimeObject.minutes}:
          {currentTimeObject.seconds}:{currentTimeObject.milliSeconds}
        </StyledSplitTime>
      )}
    </>
  );
});
