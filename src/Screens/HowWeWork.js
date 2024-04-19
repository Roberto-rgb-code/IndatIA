import React from "react";
import styles from "./HowWeWork.module.css";
import Step from "../Components/Step";

const HowWeWork = () => {
  const steps = [
    {
      text: "Dashboards en Tableau.",
    },
  ];

  return (
    <div name="Tableros" className={styles.howWeWork}>
      <h2 className={styles.title}>Como trabajamos</h2>
      {steps.map((x) => (
        <Step text={x.text} step={x.id} />
      ))}
    </div>
  );
};

export default HowWeWork;
