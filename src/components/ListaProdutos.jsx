export const ListaProdutos = [
  {
    id: 1,
    nome: "PenDrive",
    desc: "16GB USB 3.0",
    img: "https://picsum.photos/100/100",
    preco: 80,
  },
  {
    id: 2,
    nome: "Teclado",
    desc: "Teclado Gamer",
    img: "https://picsum.photos/100/100",
    preco: 79,
  },
  {
    id: 3,
    nome: "Cadeira Gamer",
    desc: "Cadeira Gamer Articulada",
    img: "https://picsum.photos/100/100",
    preco: 1500,
  },
  {
    id: 4,
    nome: "Monitor",
    desc: "15' Itautec",
    img: "https://picsum.photos/100/100",
    preco: 1500,
  },
];

export function proximoIndice(){
  let maiorId = 0;
  ListaProdutos.forEach((prod) => {
    if(prod.id > maiorId){
      maiorId = prod.id;
    }
  })
  return maiorId + 1;
}
