import { createElement } from "react";
import styles from "../style/Cabecario.module.css";

export default function Cabecalho(props) {
  return (
    <>
      <header>
        <div className={styles.header}>
          <h1>CP 2 Grupo Lindo</h1>
          <ul>
            {props.children.map((item, index) => {
              createElement("li", { key: index }, item);
              return item;
            })}
          </ul>
        </div>
      </header>
    </>
  );
}
