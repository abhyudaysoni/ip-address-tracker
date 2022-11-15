import React, { useCallback, useEffect } from "react";
import { Container } from "./styles";
import Input from "../Input/Input";
import Details from "../Details/Details";
import Map from "../Map/Map";
import { url } from "../../constants/url";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../store/data-slice";
import { setIp } from "../../store/input-slice";
import { sample } from "../../constants/sample";

const Home = () => {
  const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.searchInput.search);
  const ip = useSelector((state) => state.searchInput.ip);
  const searchHandler = () => {
    dispatch(setIp(searchInput));
    getData();
  };
  const getData = useCallback(() => {
    fetch(`${url}ipAddress=${ip ? ip : "8.8.8.8"}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setData(data));
      });
  }, [ip, dispatch]);
  useEffect(() => {
    // getData();
    dispatch(setData(sample));
  }, [dispatch, getData]);
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
