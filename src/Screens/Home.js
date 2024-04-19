import React from "react";
import { Link } from "react-scroll";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div name="Inicio" className={styles.home}>
      <div className={styles.titleContainer}>
        <p>
          Expande tu <br />
          <b>negocio</b>
        </p>
        <p>
          Con la mejor <br />
          <b>ciencia de datos</b>
        </p>
      </div>
      <div className={styles.ctaContainer}>
        <Link
          to="Contacto"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Ponerse en contacto
        </Link>
        <Link
          to="Contacto"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Consigue una cotización
        </Link>
      </div>
    </div>
  );
};

export default Home;
