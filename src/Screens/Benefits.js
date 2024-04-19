import React from "react";
import styles from "./Benefits.module.css";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";
import { FiRepeat } from "react-icons/fi";

const Benefits = () => {
  return (
    <div name="Beneficios" className={styles.benefits}>
      <h2 className={styles.benefitTitle}>
        Beneficios de la ciencia de datos
      </h2>
      <p>
        Optimización de procesos <BsFillDoorOpenFill />
      </p>
      <p>
      Innovación y desarrollo de productos
        <FaPeopleCarry />
      </p>
      <p>
        {" "}
        Toma de decisiones basada en datos <FaMoneyBillAlt />
      </p>
      <p>
      Mejora de la eficacia de la publicidad y el marketing
        <AiOutlineSchedule />
      </p>
      <p>
      Mejora de la experiencia del cliente
        <AiOutlineRise />
      </p>
      <p>
      Automatización, menos trabajo, más rendimiento
        <FiRepeat />
      </p>
    </div>
  );
};

export default Benefits;
