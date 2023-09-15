import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListaProdutos } from "../../components/ListaProdutos";
import { AiFillEdit as Editar } from "react-icons/ai";
import { AiFillDelete as Excluir } from "react-icons/ai";
import styles from "../../style/Produtos.module.css";

export default function Produtos() {
  document.title = "Produtos";

  const [count, setCount] = useState(0);
  const [novaLista, setNovaLista] = useState([{}]);

  useEffect(() => {
    setNovaLista(ListaProdutos);
  }, []);

  useEffect(() => {
    console.log(
      "executa apenas quando ocorrer o carregamento do componente principal"
    );
  }, [count]);

  return (
    <div className={styles.container}>
      <h1>Lista de Produtos</h1>
      <table className={styles.tblEstilo}>
        <thead className={styles.tblHeader}>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>IMAGEM</th>
            <th>PREÇO</th>
            <th>EDITA/EXCLUIR</th>
          </tr>
        </thead>
        <tbody>
          {novaLista.map((item, indice) => (
            <tr key={indice} className={styles.tblRow}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.desc}</td>
              <td>
                <img src={`${item.img}`} alt={`${item.desc}`} />
              </td>
              <td>{item.preco}</td>
              <td>
                <Link to={`/editar/produtos/${item.id}`}>
                  <Editar />
                </Link>
                /{" "}
                <Link to={`/excluir/produtos/${item.id}`}>
                  <Excluir />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className={styles.btnAdicionar}>Adicionar Produto</button>
    </div>
  );
}
