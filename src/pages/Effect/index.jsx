import { useEffect, useState } from "react";
import { Head } from "../../components/Head";
import styles from "./styles.module.css";

export const Effect = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/CauaRodrigues/hooks-studies/lista",
    )
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <>
      <Head title="useEffect" />

      <section className="container">
        <div className={styles.content}>
          {books.length ? (
            books.map(({ id, categoria, livros }) => (
              <details key={id}>
                <summary className={styles.summary}>{categoria}</summary>
                <ul className={styles.ul}>
                  {livros.map((title, index) => (
                    <li key={index}>{title}</li>
                  ))}
                </ul>
              </details>
            ))
          ) : (
            <span>loading...</span>
          )}
        </div>
      </section>
    </>
  );
};
