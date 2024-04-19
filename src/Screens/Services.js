import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div name="Servicios" className={styles.services}>
      <p>Damos consultoria de ciencia de datos</p>
      <img
        className={styles.webImage}
        src={require("../assets/webImage.jpg")}
      ></img>
    </div>
  );
};

export default Services;
