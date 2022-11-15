import styled from "styled-components";
import bg from "../../assets/bg.png";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: 500;
  }
  header {
    width: 100%;
    padding: 2rem;
    height: 250px;
    text-align: center;
    color: white;
    background-image: url(${bg});
  }
`;
