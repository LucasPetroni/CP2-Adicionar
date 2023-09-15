import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../../components/ListaProdutos";
import styles from "../../style/Excluir.module.css";

export default function ExcluirProdutos() {
  const navigate = useNavigate();

  //utilizando o HOOK useParams()
  const { id } = useParams();

  //Filtrando o produto selecionado byId
  const produto = ListaProdutos.filter((item) => item.id === parseInt(id))[0];

  const handleDelete = () => {
    let indice;
    indice = ListaProdutos.findIndex((item) => item.id === parseInt(id));
    ListaProdutos.splice(indice, 1);

    navigate("/produtos");
  };

  return (
    <div className={styles.container}>
      <h1>Deseja excluir esse produto?</h1>
      <div className={styles.produtoContainer}>
        <section>
          <h2>Produto Selecionado</h2>
          <h3>Nome: {produto.nome}</h3>
          <h3>Descrição: {produto.desc}</h3>
          <div>
            <img
              className={styles.produtoImagem}
              src={produto.img}
              alt={produto.desc}
            />
          </div>
          <h3>Preço: {produto.preco}</h3>
        </section>
        <button className={styles.btnExcluir} onClick={handleDelete}>
          EXCLUIR
        </button>
        <button
          className={styles.btnCancelar}
          onClick={() => navigate("/produtos")}
        >
          CANCELAR
        </button>
      </div>
    </div>
  );
}
