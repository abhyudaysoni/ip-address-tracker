import styled from "styled-components";

export const Container = styled.section`
  width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  background: white;
  border-radius: 30px;
  box-shadow: 0 0 10px #bfbfbf;
  padding: 3rem;
  z-index: 5;
  position: relative;
  top: -80px;
  .loading {
    img {
      height: 80px;
    }
  }
  .details {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
  }
  .detail-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      color: gray;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    h2 {
      font-weight: 500;
    }
  }
  @media (max-width: 1100px) {
    width: 95%;
  }
  @media (max-width: 700px) {
    padding: 1.5rem;
    border-radius: 10px;
    font-size: smaller;
    .details {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
    }
    .detail-section {
      font-size: smaller;
    }
  }
`;
