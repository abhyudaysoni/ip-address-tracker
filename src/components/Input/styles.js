import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 60px;
  background: white;
  width: 500px;
  margin: 1rem auto;
  border-radius: 20px;
  justify-content: space-between;
  overflow: hidden;
  input {
    height: 100%;
    width: 100%;
    border: none;
    font-size: 1.2rem;
    padding: 1rem;
  }
  input:focus {
    border: none;
  }
  #arrow {
    background: black;
    width: 80px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    img {
      align-self: center;
    }
  }
`;
