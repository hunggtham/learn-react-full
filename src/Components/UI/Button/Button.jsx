import styled from "styled-components";
import styles from "./Button.module.css";
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
//check props of this button component  <button type={props.type} className={styles.button} onCLick={props.onCLick}>
/* ${(props) => {
    console.log(props);
  }} */

/* @media (min-width: 768px) {
    width: auto;
  }
`;
export default Button; */

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onCLick={props.onCLick}>
      {props.children}
    </button>
  );
};

export default Button;
