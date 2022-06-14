import { RoundButtonStyled } from "../../styles/RoundButton.style";
// Accepting props from Control Buttons
const RoundButton = ({ label, handleClick, disabled, css }) => {
  return (
    // Using generic round button styled component
    <RoundButtonStyled css={css} disabled={disabled} onClick={handleClick}>
      {label}
    </RoundButtonStyled>
  );
};
export default RoundButton;
