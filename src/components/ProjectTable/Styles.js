import styled from "styled-components";
import Screen from "../../GlobalStyles/Screen";

export const Wrapper = styled.section`
  max-width: 1350px;
  width: 100%;

  border-radius: 0.6rem;
  margin: 2rem auto;
  box-shadow: var(--shadow);
  ${Screen.md`
  border-top-left-radius: 0.6rem;
    border-top-right-radius: 0.6rem;
  `}
  > div {
    background-color: #fafafa;
    height: 80px;
    ${Screen.md`
    height: 60px;
    
    `}
    display: flex;
    align-items: center;
    padding: 0 1.4rem;
    border-bottom: 0.14rem solid var(--grey-color-10);
    display: flex;
    ${Screen.md`
    display: grid;
    grid-template-columns:
      minmax(150px, 350px) minmax(150px, 280px) minmax(150px, 350px)
      minmax(100px, 230px) minmax(30px, 148px);
    `}
    span {
      font-weight: 600;
      font-size: 0.87rem;
    }
  }
`;

export const NotResults = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  a {
    text-decoration: none;
  }
  transform: translate(-50%, -50%);
  > div:nth-child(2) {
    margin: 1rem 0;
  }
`;
