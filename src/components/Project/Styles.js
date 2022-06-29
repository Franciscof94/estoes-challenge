import styled from "styled-components";

export const Wrapper = styled.div`
  > div:first-child {
    display: flex;
    flex-direction: column;
    > span:first-child {
      font-size: 0.87rem;
      color: var(--grey-color-50);
      font-weight: 400;
      padding: 0.3rem 0;
    }
    > span:last-child {
      font-size: 0.75rem;
      color: #b7b7b7;
    }
  }
  > div:nth-child(2) {
    display: flex;
    align-items: center;
    > div:first-child {
      background-color: #ffe0b2;
      height: 24px;
      width: 24px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.6rem;
      > span {
        font-size: 0.56em;
      }
    }
    > span:last-child {
      font-weight: 400;
      color: var(--grey-color-50);
    }
  }
  > div:nth-child(3) {
    display: flex;
    align-items: center;
    > div:first-child {
      margin-right: 0.6rem;
      img {
        height: 24px;
        width: 24px;
        border-radius: 50%;
        object-fit: contain;
      }
    }
    > span:last-child {
      color: var(--grey-color-50);
      font-weight: 400;
    }
  }
  > div:nth-child(4) {
    border-radius: var(--radius);
    color: var(--grey-color-50);
    border: 0.12rem solid var(--grey-color-10);
    background-color: var(--white-color-20);
    max-width: 60px;
    width: 100%;
    font-size: 0.87em;
    text-align: center;
  }
  > div:last-child {
    cursor: pointer;
    position: relative;
  }
`;

export const Mobile = styled.div`
  display: flex;
  justify-content: space-between;
  > div:first-child {
    display: flex;
    flex-direction: column;
    > div:last-child {
      display: flex;
      align-items: center;
      > div:first-child {
        display: flex;

        img {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          object-fit: contain;
          margin-right: 0.5rem;
        }
      }
    }
    > div:first-child {
      display: flex;
      flex-direction: column;
      > span:first-child {
        font-size: 0.87em;
        font-weight: 400;
      }
      > span:last-child {
        font-size: 0.62em;
        font-weight: 400;
        color: #b7b7b7;
        padding: 0.5rem 0;
      }
    }
  }
`;
