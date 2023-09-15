import React from "react";
import styles from "../style/Rodape.module.css";

export default function Rodape() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <ul>
          <li>
            <a href="#">Github</a>
          </li>
          <li>
            <a href="#">X</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <p>Todos os direitos reservados - 2023</p>
      </div>
    </footer>
  );
}
