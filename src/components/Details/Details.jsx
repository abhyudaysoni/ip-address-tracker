import React from "react";
import { useSelector } from "react-redux";
import Loading from "../UI/Loading";
import { Container } from "./styles";

const Details = () => {
  const data = useSelector((state) => state.data.data);
  console.log(data);
  return (
    <Container>
      {!data && (
        <div className="loading">
          <Loading />
        </div>
      )}
      <div className="details">
        {data && (
          <>
            <div className="detail-section">
              <p>IP Address</p>
              <h2>{data.ip}</h2>
            </div>
            <div className="detail-section">
              <p>Location</p>
              <h2>
                {data.location.region}, {data.location.country}
              </h2>
            </div>
            <div className="detail-section">
              <p>Time Zone</p>
              <h2>{data.location.timezone}</h2>
            </div>
            <div className="detail-section">
              <p>ISP</p>
              <h2>{data.isp}</h2>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default Details;
