import React, { useState, useEffect } from "react";
import "./TrafficLight.css";

const TrafficLight = () => {
  const [color, setColor] = useState("green");

  useEffect(() => {
    const interval = setTimeout(() => {

      if (color === "green") setColor("yellow"); 
      else if (color === "yellow") setColor("red"); 
      else if (color === "red") setColor("green"); 


    }, color === "green" ? 3000 : color === "yellow" ? 2000 : 5000);

    return () => clearTimeout(interval); 
  }, [color]);

  return (
    <div className="traffic-light-container">
      <div className={`light ${color === "red" ? "red" : ""}`} />
      <div className={`light ${color === "yellow" ? "yellow" : ""}`} />
      <div className={`light ${color === "green" ? "green" : ""}`} />
    </div>
  );
};

export default TrafficLight;
