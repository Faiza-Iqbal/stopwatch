import React from "react";
// Hook
import useTimeConversion from "../../hooks/useTimeConversion";
// Styled component
import { StyledSplitTime } from "./SplitTime.style";

export const SplitTime = React.memo(({ splitTimeState }) => {
  const currentTimeObject = useTimeConversion(splitTimeState);

  return (
    <>
      <StyledSplitTime>
        {!splitTimeState
          ? "Split Time"
          : `${currentTimeObject.hours}: ${currentTimeObject.minutes}:
          ${currentTimeObject.seconds}: ${currentTimeObject.milliSeconds}`}
      </StyledSplitTime>
    </>
  );
});
