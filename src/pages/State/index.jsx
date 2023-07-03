import { useState } from "react";
import { Head } from "../../components/Head";
import "./styles.css";

export const State = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [amountChanges, setAmountChanges] = useState(0);

  const handlerButtonClick = () => {
    setIsRotating((prevState) => !prevState);
    setAmountChanges((prevState) => prevState + 1);
  };

  return (
    <>
      <Head title="useState" />

      <section className="container">
        <div className={`triangle ${isRotating ? "spinTriangle" : ""}`} />
        <button onClick={handlerButtonClick}>
          {isRotating ? "Parar" : "Girar"} Triângulo
        </button>
        <span>mudanças: {amountChanges}</span>
      </section>
    </>
  );
};
