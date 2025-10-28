import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Site aula front-end</h1>
      <h2>Aula de 20 de outubro</h2>
    </div>
  );
}
