import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../../components/ListaProdutos";
import styles from "../../style/Editar.module.css";

export default function EditarProdutos() {
  //Utilizando redirecionamento de ROTAS com useNavigate()
  const navigate = useNavigate();

  //utilizando o HOOK useParams()
  const { id } = useParams();

  //Filtrando o produto selecionado byId
  let produtoFiltrado = ListaProdutos.filter(
    (item) => item.id === parseInt(id)
  )[0];

  const criando = !produtoFiltrado;

  // const criando = () => (id === proximoIndice());

  document.title = criando ? "Criar Produto" : "Editar Poduto";

  if (!produtoFiltrado) {
    // const listaCopia =  [...ListaProdutos, {id: id}];
    produtoFiltrado = {
      id: parseInt(id),
      nome: "",
      desc: "",
      img: "",
      preco: null,
    };

    ListaProdutos.push(produtoFiltrado);

    // produtoFiltrado = ListaProdutos.filter(
    //   (item) => item.id === parseInt(id))
    // ListaProdutos =
  }

  //Utilizando HOOK useState()

  const [produto, setProduto] = useState({
    id: produtoFiltrado.id,
    nome: produtoFiltrado.nome,
    desc: produtoFiltrado.desc,
    img: produtoFiltrado.img,
    preco: produtoFiltrado.preco,
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let indice;

    ListaProdutos.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });

    ListaProdutos.splice(indice, 1, produto);

    //Redirecionando após realizar a edição do produto filtrado
    navigate("/produtos");
  };

  return (
    <div className={styles.container}>
      <h1>{criando ? 'Criar Produto' : 'Editar Produto'}</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>{criando ? 'Novo Produto' : 'Produto Selecionado'}</legend>
            <div className={styles.formField}>
              <label htmlFor="idNome">Nome</label>
              <input
                type="text"
                name="nome"
                id="idNome"
                onChange={handleChange}
                value={produto.nome}
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor="idDesc">Descrição</label>
              <input
                type="text"
                name="desc"
                id="idDesc"
                onChange={handleChange}
                value={produto.desc}
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor="idImg">Imagem</label>
              <input
                type="text"
                name="img"
                id="idImg"
                onChange={handleChange}
                value={produto.img}
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor="idpreco">Preço</label>
              <input
                type="text"
                name="preco"
                id="idpreco"
                onChange={handleChange}
                value={produto.preco}
              />
            </div>
            <div>
              <button className={styles.btnEditar}>{criando?'CRIAR':'EDITAR'}</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
