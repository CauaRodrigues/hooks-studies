import { useEffect } from "react";
import { Head } from "../../components/Head";

export const Effect = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Head title="useEffect" />

      <section className="container"></section>
    </>
  );
};
