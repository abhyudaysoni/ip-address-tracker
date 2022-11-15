import React from "react";
import { Container } from "./styles";
import arrow from "../../assets/icon-arrow.svg";
import { changeInput } from "../../store/input-slice";
import { useDispatch, useSelector } from "react-redux";

const Input = (props) => {
  const searchinput = useSelector((state) => state.searchInput.search);
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    dispatch(changeInput(e.target.value));
  };
  return (
    <Container>
      <input
        type="text"
        onChange={inputHandler}
        placeholder="search for any IP address or domain"
        value={searchinput}
      />
      <div id="arrow" onClick={props.onSearch}>
        <img src={arrow} alt="arrow" />
      </div>
    </Container>
  );
};

export default Input;
