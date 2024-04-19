import React from "react";
import styles from "./HowWeWork.module.css";
import Step from "../Components/Step";
import Button1 from "./Button1"; // Importa tus componentes de vista aquí
import Button2 from "./Button2";
import Button3 from "./Button3";

const HowWeWork = () => {
  const steps = [
    {
      text: "Dashboards en Tableau.",
    },
  ];

  return (
    <div name="Tableros" className={styles.howWeWork}>
      <h2 className={styles.title}>Como trabajamos</h2>
      {/* Renderiza tus componentes de vista en lugar de Step */}
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
};

export default HowWeWork;