import styled from "styled-components";
export const StyledRoundButton = styled.button`
  border-radius: 50%;
  width: 85px;
  height: 85px;
  font-size: 20px;
  margin-right: 8px;
  border: 1px solid #a0a0a0;
  color: ${(props) =>
    props.css.color}; //Dynamically assigning color based on props
  background-color: ${(props) => props.css.bgColor};
`;
