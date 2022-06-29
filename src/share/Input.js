import styled, { css } from "styled-components";

export const Input = styled.input`
  outline: none;
  border: transparent;
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          background-color: var(--white-color);
          border: 0.12rem solid var(--grey-color-10);
          border-radius: var(--radius);
          padding: 0.68rem;
          width: 100%;
        `;
      default:
        break;
    }
  }}
`;
