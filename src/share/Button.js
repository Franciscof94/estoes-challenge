import styled, { css } from "styled-components";
import Screen from "../GlobalStyles/Screen";

export const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          border-radius: 4px;
          padding: 4px 4.8px;
          ${Screen.md`
          padding: 8px 16px;
          font-size: 1em;
          `}
          background-color: var(--red-color);
          font-weight: 400;
          color: var(--white-color);
          line-height: 24px;
          font-size: 0.75;
          display: flex;
          align-items: center;
        `;
        case "secondary":
        return css`
          border-radius: 4px;
          padding: 4px 4.8px;
          ${Screen.md`
          padding: 8px 16px;
          font-size: 1em;
          `}
          background-color: #C1C1C1;
          font-weight: 400;
          color: var(--white-color);
          line-height: 24px;
          font-size: 0.75;
          display: flex;
          align-items: center;
        `;
        case "tertiary":
        return css`
          color: black;
          font-size: 1.2em;
        `;
      default:
        break;
    }
  }}
`;
