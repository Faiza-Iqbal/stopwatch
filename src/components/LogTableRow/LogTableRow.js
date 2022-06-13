import useTimeConversion from "../../hooks/useTimeConversion";
import { LogTableRowStyled } from "../../styles/LogTableRowStyled.style";
const LogTableRow = ({ logRow }) => {
  const currentTimeObject = useTimeConversion(logRow.time);
  return (
    <LogTableRowStyled>
      <td># {logRow.serialNumber}</td>
      <td style={{ color: "orange" }}>
        {currentTimeObject.hours}:{currentTimeObject.minutes}:
        {currentTimeObject.seconds}:{currentTimeObject.milliSeconds}
      </td>
      <td>{logRow.action}</td>
    </LogTableRowStyled>
  );
};
export default LogTableRow;
