import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--white-color);
  max-width: 385px;
  width: 100%;
  border-radius: var(--radius);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  > div:first-child {
    display: flex;
    justify-content: center;
  }
  > div:nth-child(2) {
    margin: 1.8rem 0;
    font-size: 1.1em;
  }
  padding: 1.8rem;
  > div:last-child {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;
