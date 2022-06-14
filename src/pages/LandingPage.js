import React, { useState } from "react";
// Importing Components
import ControlButtons from "../components/ControlButtons/ControlButtons";
import LogTable from "../components/LogTable/LogTable";
import Separator from "../components/Separator/Separator";
import { SplitTime } from "../components/SplitTime/SplitTime";
import Timer from "../components/Timer/Timer";
// Importing styled components
import { ContentWrapper } from "../styles/ContentWrapper.style";
import { SectionStyled } from "../styles/Section.style";
// Global variables
let timerInterval; // for interval id
let currentStopWatchTime = 0; // current stop watch total milliseconds

const LandingPage = () => {
  // states
  const [startButton, setStartButton] = useState(true); // For toggling Start & Pause
  const [splitTimeState, setSplitTimeState] = useState(currentStopWatchTime); // For Split time
  const [totalMilliSeconds, setTotalMilliSeconds] =
    useState(currentStopWatchTime);
  const [logArray, setLogArray] = useState([]); //For Log Table

  //Function on click of "start" button
  const startClicked = () => {
    setStartButton(!startButton); // toggle start and paused button states
    if (startButton) {
      //start was Clicked
      // interval of 25ms. To tackle interval limitations on small intervals (Ref: https://stackoverflow.com/questions/18880593/run-a-function-for-each-milliseconds)
      timerInterval = setInterval(() => {
        startTimer();
      }, 25);
    } else if (!startButton) {
      // Pause was Clicked
      setLogArray([
        ...logArray,
        {
          serialNumber: logArray.length + 1,
          time: currentStopWatchTime,
          action: "Pause",
        },
      ]);
      clearInterval(timerInterval); // stop the timer
    }
  };
  const startTimer = () => {
    currentStopWatchTime = currentStopWatchTime + 25; // get total time in mili seconds according to interval of 25ms
    setTotalMilliSeconds(currentStopWatchTime); //Setting time state
  };
  //Function on click of "Split" button
  const splitClicked = () => {
    setSplitTimeState(currentStopWatchTime);
    // append to log table
    setLogArray([
      ...logArray,
      {
        serialNumber: logArray.length + 1,
        time: currentStopWatchTime,
        action: "Split",
      },
    ]);
  };
  // Function on click of "Reset" button
  const resetClicked = () => {
    currentStopWatchTime = 0;
    setTotalMilliSeconds(currentStopWatchTime);
    setSplitTimeState(0);
    setLogArray([]);
  };

  return (
    <SectionStyled>
      <ContentWrapper>
        <Timer totalMilliseconds={totalMilliSeconds} />
        <SplitTime splitTimeState={splitTimeState} />
        <ControlButtons
          startClicked={startClicked}
          splitClicked={splitClicked}
          resetClicked={resetClicked}
          startButton={startButton}
          currentStopWatchTime={currentStopWatchTime}
        />
        {logArray.length > 0 && <Separator />}
        <LogTable logArray={logArray} />
      </ContentWrapper>
    </SectionStyled>
  );
};
export default LandingPage;
