import styled from "styled-components";
import Screen from "../../GlobalStyles/Screen";

export const Wrapper = styled.div`
  background-color: var(--white-color);
  border-radius: var(--radius);
  width: 181px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  position: absolute;
  right: 1.5rem;
  ${Screen.md`
  right: 6.8rem;
  `};
  z-index: 55;
  > div:first-child {
    width: 12px;
    height: 12px;
    position: absolute;
    bottom: 4.6rem;
    right: 15px;
    transform: rotate(45deg);
    background-color: var(--white-color);
  }

  > a:nth-child(2) {
    padding: 0.7rem;
    display: flex;
    align-items: center;
    border-bottom: 0.15rem solid #dddddd;
    text-decoration: none;
    span {
      margin-left: 0.5rem;
      font-weight: 400;
      color: black
    }
  }
  > div:last-child {
    padding: 0.7rem;
    display: flex;
    align-items: center;
    span {
      margin-left: 0.5rem;
      font-weight: 400;
    }
  }
`;
