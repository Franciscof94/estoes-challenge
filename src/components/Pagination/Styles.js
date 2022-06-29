import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -75%);
  > ul {
    display: flex;
    min-width: 220px;
    max-width: 18%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    > li {
      list-style: none;
      background-color: none;
    }
    > div:nth-child(2) {
      display: flex;
      align-items: center;
      > li {
        list-style: none;
        cursor: pointer;
        font-size: 1.5em;
        margin: 0 0.3rem;
      }
    }
    .active {
      color: var(--white-color);
      font-size: 1.5em;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--red-color);
      list-style: none;
      cursor: pointer;
      margin: 0 0.3rem;
    }
    .disabled {
      pointer-events: none;
      opacity: 0.3;
    }
  }
`;
