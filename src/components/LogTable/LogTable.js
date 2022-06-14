import LogTableRow from "../LogTableRow/LogTableRow";

const LogTable = ({ logArray }) => {
  return (
    <>
      <table>
        <tbody>
          {/* Iterating over logArray to build rows in table */}
          {logArray.map((logRow, index) => (
            <LogTableRow key={`${logRow.time}_${index}`} logRow={logRow} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default LogTable;
