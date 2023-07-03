import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { CaretLeft } from "@phosphor-icons/react";

import styles from "./styles.module.css";

export const Head = ({ title }) => {
  const navigate = useNavigate();
  return (
    <>
      <button className={styles.goBackBtn} onClick={() => navigate("../")}>
        <CaretLeft size={32} weight="bold" />
      </button>

      <h2>{title}</h2>
    </>
  );
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
};
