import React from "react";

import styled from "styled-components";

const PropertiesCardItem = styled.div`
  display: flex;
  margin: 15px;
`;

const ImageContainer = styled.div`
  padding-top: 5px;
  width: 120px;
`;

const Image = styled.div`
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  width: 100%;
  height: 100px;
`;

const PropertyItemDataContainer = styled.div`
  display: flex;
  padding: 10px 10px 10px 35px;
  width: 90%;

  div:nth-child(-n + 2) {
    width: 33%;
  }

  div:nth-child(3) {
    border: 2px solid #f51711;
    border-radius: 10px;
    padding: 0 15px;
    width: 33%;
  }

  h2 {
    color: #4a4756;
    font-size: 18px;
    margin-bottom: 5px;
  }

  p {
    color: #4a4756;
    font-weight: 500;

    span {
      color: #f51711;
      font-weight: 600;
    }
  }

  p:nth-child(1) {
    margin: 10px 0 14px 0;
  }

  p:nth-child(2) {
    margin: 18px 0 6px 0;
  }
`;

const PropertyItemData = (props) => {
  return (
    <PropertiesCardItem>
      <ImageContainer>
        <Image src={"https://via.placeholder.com/150"} />
      </ImageContainer>
      <PropertyItemDataContainer>
        <div>
          <p
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ color: "#4a4756", marginBottom: "5px" }}>
              1222 W Main St
            </span>
            <span style={{ color: "#4a4756" }}> Milwaukee, WI</span>
          </p>
          <p style={{ marginTop: "5px" }}>2 Units</p>
        </div>
        <div>
          <p>Lease holder's name</p>
          <p>Lease holder's name</p>
        </div>
        <div>
          <h2>Leasing Info</h2>
          <div style={{ display: "flex", width: "100%" }}>
            <p style={{ marginTop: "5px", marginRight: "15px" }}>
              <span>Start Date: </span>09/20
            </p>
            <p style={{ marginTop: "5px" }}>
              <span>End Date: </span>09/21
            </p>
          </div>
        </div>
      </PropertyItemDataContainer>
    </PropertiesCardItem>
  );
};

export default PropertyItemData;
