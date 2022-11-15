import React, { useEffect } from "react";
import { Container } from "./styles";
import Input from "../Input/Input";
import Details from "../Details/Details";
import Map from "../Map/Map";
import { url } from "../../constants/url";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../store/data-slice";
import { sample } from "../../constants/sample";
import { changeInput } from "../../store/input-slice";

const Home = () => {
  const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.searchInput.search);
  const searchHandler = () => {
    getData();
  };
  const getData = () => {
    fetch(`${url}ipAddress=${searchInput}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 422) {
          dispatch(changeInput(""));
          throw new Error("Enter Correct IP");
        }
        dispatch(setData(data));
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  useEffect(() => {
    dispatch(setData(sample));
  }, [dispatch]);
  return (
    <Container>
      <header>
        <h1>IP Adress Tracker</h1>
        <Input onSearch={searchHandler} />
      </header>
      <Details />
      <Map />
    </Container>
  );
};

export default Home;
