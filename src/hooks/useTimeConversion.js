import { useEffect, useState } from "react";
// Function to add zeros prefix to time digits
const prefixZerosToNumber = (number, length) => {
  let numberString = number.toString();
  for (var i = numberString.length; i < length; i++)
    numberString = "0" + numberString;
  return numberString;
};
const useTimeConversion = (totalMilliSeconds) => {
  const [timeState, setTimeState] = useState({
    milliSeconds: "000",
    seconds: "00",
    minutes: "00",
    hours: "00",
  });
  useEffect(() => {
    let hours = prefixZerosToNumber(
      Math.floor(totalMilliSeconds / (60 * 60 * 1000)),
      2
    );
    let remainder = totalMilliSeconds - hours * 60 * 60 * 1000;
    let minutes = prefixZerosToNumber(Math.floor(remainder / (60 * 1000)), 2);
    remainder = remainder - minutes * 60 * 1000;
    let seconds = prefixZerosToNumber(Math.floor(remainder / 1000), 2);
    let milliSeconds = prefixZerosToNumber(remainder - seconds * 1000, 3);
    setTimeState({
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      milliSeconds: milliSeconds,
    });
  }, [totalMilliSeconds]);

  return timeState;
};
export default useTimeConversion;
