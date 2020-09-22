import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { db } from "../Firebase";
import Widget from "../components/widget";

const Layout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Image = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center;
  width: 450px;
  height: 300px;
`;

const Card = styled(Link)`
  overflow: hidden;
  width: 450px;
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.colors.primary};
  margin: 16px;
  border-radius: 20px;
  h4 {
    margin: 8px 16px;
  }
  p {
    margin: 16px;
  }
  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.colors.pHover};
  }
`;
const SlideShow = styled.div`
  width: ${(props) => props.count}00%;
  overflow: hidden;
  display: flex;
  justify-items: center;
  align-items: center;
`;

function Properties(props) {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    async function getProperties() {
      const units = await db.collection("properties").get();
      units.forEach((doc) =>
        setProperties((properties) => [
          ...properties,
          { id: doc.id, ...doc.data() },
        ])
      );
    }
    getProperties();
  }, []);
  return (
    <>
      <Widget />
      <h1>Properties</h1>
      <Layout>
        {properties.map((property) => (
          <Card key={property.id} to={`/${property.id}`}>
            <SlideShow count={property.images.length}>
              {property.images.map((image, i) => (
                <Image key={i} src={image} />
              ))}
            </SlideShow>
            <h4>{property.title}</h4>
            <p>Units: {property.units}</p>
          </Card>
        ))}
      </Layout>
    </>
  );
}
export default Properties;
