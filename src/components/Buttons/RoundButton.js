import { StyledRoundButton } from "../../styles/RoundButton.style";
// Accepting props from Control Buttons
const RoundButton = ({ label, handleClick, disabled, css }) => {
  return (
    // Using generic round button styled component
    <StyledRoundButton css={css} disabled={disabled} onClick={handleClick}>
      {label}
    </StyledRoundButton>
  );
};
export default RoundButton;
