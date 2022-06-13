import React from "react";
import { WrapperWithPadding } from "../../styles/WrapperWithPadding.style";
import RoundButton from "./RoundButton";
// Importing button themes
import {
  defaultButton,
  activeGreenButton,
  activeOrangeButton,
  activeBlueButton,
  activePinkButton,
} from "../../themes/buttonThemes";
// Control Buttons accepting props from Landing page component
const ControlButtons = ({
  startClicked,
  splitClicked,
  resetClicked,
  startButton,
  currentStopWatchTime,
}) => {
  return (
    <>
      <WrapperWithPadding>
        {/* Using Round Button generic component to create all the buttons */}
        {startButton && (
          <RoundButton
            css={activeGreenButton}
            label="Start"
            handleClick={startClicked}
          ></RoundButton>
        )}
        {!startButton && (
          <RoundButton
            css={activePinkButton}
            label="Pause"
            handleClick={startClicked}
          ></RoundButton>
        )}
        <RoundButton
          css={startButton ? defaultButton : activeOrangeButton}
          label="Split"
          handleClick={splitClicked}
          disabled={startButton}
        ></RoundButton>
        <RoundButton
          css={
            !startButton || currentStopWatchTime === 0
              ? defaultButton
              : activeBlueButton
          }
          disabled={!startButton}
          handleClick={resetClicked}
          label="Reset"
        ></RoundButton>
      </WrapperWithPadding>
    </>
  );
};
export default ControlButtons;
