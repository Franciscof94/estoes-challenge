import styled, { css } from "styled-components";

export const Select = styled.select`
  border: transparent;
  outline: none;
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          font-size: 0.87em;
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
