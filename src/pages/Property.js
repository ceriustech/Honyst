import React, { useState, useEffect } from "react";
import { db } from "../Firebase";

export default function Property(props) {
  const [property, setProperty] = useState({});
  useEffect(() => {
    async function getProperty() {
      const place = await db.collection("properties").doc(props.propId).get();
      setProperty(place.data());
    }
    getProperty();
  }, []);
  return (
    <div>
      <h3>title: {property?.title}</h3>
      <p>units: {property?.units}</p>
      {property?.images?.map((img, i) => (
        <img key={i} src={img} />
      ))}
    </div>
  );
}
