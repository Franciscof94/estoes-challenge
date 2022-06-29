import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 665px;
  width: 100%;
  background-color: var(--white-color);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: var(--radius);
  margin: 2rem auto;
  padding: 1.6rem 2.6rem;
  form {
    > div {
      display: flex;
      flex-direction: column;
      margin-bottom: 1.5rem;
      small {
        color: var(--red-color);
        font-weight: bold
      }
    }
    > div:nth-child(3) {
      input {
        border: none;
      }
      > div:nth-child(2) {
        border: 0.12rem solid var(--grey-color-10);
        border-radius: var(--radius);
        display: flex;
        align-items: center;
      }
    }
    > div:nth-child(4) {
      input {
        border: none;
      }
      > div:nth-child(2) {
        border: 0.12rem solid var(--grey-color-10);
        border-radius: var(--radius);
        display: flex;
        align-items: center;
      }
    }
    > div:nth-child(5) {
      input {
        border: none;
      }
      > div:nth-child(2) {
        border: 0.12rem solid var(--grey-color-10);
        border-radius: var(--radius);
        display: flex;
        align-items: center;
      }
    }
  }
`;
