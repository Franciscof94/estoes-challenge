import styled from "styled-components";
import Screen from "../../GlobalStyles/Screen";

export const Wrapper = styled.div`
  padding: 0.7rem 0;
  border-bottom: 0.14rem solid var(--grey-color-10);
  background-color: var(--white-color);
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 1.3rem;
  > div {
    display: flex;
    justify-content: space-between;
    max-width: 1350px;
    width: 100%;
    margin: 0 auto;

    > div:first-child {
      display: flex;
      align-items: center;
      a {
        color: var(--grey-color-60);
        display: flex;
        align-items: center;
      }
      span {
        padding: 0 1.8rem 0 1.3rem;
      }
      h2 {
        font-size: 1em;
        ${Screen.md`
          font-size: 1.5em;
          font-weight: 600;
        `}
      }
    }
    a {
      text-decoration: none;
    }
  }
`;
