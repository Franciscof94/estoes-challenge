import styled from "styled-components";

export const Wrapper = styled.header`
  border-bottom: 0.14rem solid var(--grey-color-10);
  background-color: var(--white-color);
  padding: 0 1.3rem;
  > a {
    display: flex;
    justify-content: space-between;
    max-width: 1350px;
    width: 100%;
    margin: 0 auto;
    padding: 0.8rem 0;
  }
`;
