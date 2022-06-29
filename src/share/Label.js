import styled, { css } from "styled-components";

export const Label = styled.label`
  font-weight: 400;
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          font-size: 0.87em;
          color: var(--label-color);
          margin-bottom: 0.5rem;
        `;
      default:
        break;
    }
  }}
`;
