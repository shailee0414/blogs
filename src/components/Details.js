import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const [data, setData] = useState();
  const { state } = useLocation();
  useEffect(() => {
    setData(state?.item);
  }, []);
  return (
    <div
      className="ui container"
      style={{
        paddingTop: "5rem",
        display: "flex",
        flex: "1",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex" ,maxWidth:"35rem"}}>
        <img
          src={data?.image}
          style={{ width: "27rem", height: "20rem" }}
          className="img-fluid"
        />
      </div>
      <div style={{  paddingTop: "3em",paddingLeft:"3em",width:"40rem"}}>
        <p style={{ fontSize: "1.6em" }}>
          <b>Owner Name:</b> {data?.owner?.firstName} {data?.owner?.lastName}
        </p>
        <p style={{ fontSize: "1.6em" }}>
          <b>Publish Date:</b> {data?.publishDate}
        </p>
        <p style={{ fontSize: "1.6em" }}>
          <b>About:</b> {data?.text}
        </p>
      </div>
    </div>
  );
};
export default Details;
