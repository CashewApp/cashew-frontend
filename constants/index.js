export const destaque = [
  {
    id: 1,
    name: "Coxinha",
    price: "R$ 6,50",
    image: require("../assets/coxinha.jpeg"),
    descricao: "coxinha de frango com catupiry",
  },
  {
    id: 2,
    name: "Pao de queijo",
    price: "R$ 7,00",
    image: require("../assets/paodequeijo.jpg"),
    descricao: "deliciosos paes de queijos, possuem 8 unidades",
  },
  {
    id: 3,
    name: "Coca cola",
    price: "R$ 6,00",
    image: require("../assets/coca.png"),
    descricao: "coca cola 350ml",
  },

  {
    id: 4,
    name: "Pao de batata",
    price: "R$ 7,50",
    image: require("../assets/paodebatata.jpg"),
    descricao: "delicioso pao de batata recheado de requeijao",
  },
];

export const Categorias = [
  {
    status: "todos",
  },
  {
    status: "salgados",
  },
  {
    status: "bebidas",
  },
  {
    status: "sobremesas",
  },
  {
    status: "refeicoes",
  },
];

export const produto = [
  {
    id: 1,
    name: "Coxinha",
    price: "R$ 6,50",
    image: require("../assets/coxinha.jpg"),
    descricao: "coxinha de frango com catupiry",
    status: "salgados",
    destaque: true,
  },
  {
    id: 2,
    name: "Pao de queijo",
    price: "R$ 7,00",
    image: require("../assets/paodequeijo.jpg"),
    descricao: "8 deliciosos paes de queijo",
    status: "salgados",
    destaque: true,
  },
  {
    id: 3,
    name: "Pao de batata",
    price: "R$ 6,50",
    image: require("../assets/paodebatata.jpg"),
    descricao: "coxinha de frango com catupiry",
    status: "salgados",
    destaque: false,
  },
  {
    id: 4,
    name: "Enroladinho",
    price: "R$ 7,50",
    image: require("../assets/enroladinho.jpg"),
    descricao: "enroladinho de presunto e queijo",
    status: "salgados",
    destaque: false,
  },
  {
    id: 5,
    name: "Coca cola",
    price: "R$ 6,00",
    image: require("../assets/coca.png"),
    descricao: "coca cola 350ml",
    status: "bebidas",
    destaque: true,
  },
  {
    id: 6,
    name: "Pepsi",
    price: "R$ 6,00",
    image: require("../assets/pepsi.jpg"),
    descricao: "pepsi 350ml",
    status: "bebidas",
    destaque: false,
  },
  {
    id: 7,
    name: "Chocolate",
    price: "R$ 5,50",
    image: require("../assets/chocolate.jpg"),
    descricao: "chocolate ao leite 500g",
    status: "sobremesas",
    destaque: false,
  },

  {
    id: 8,
    name: "Croissant de chocolate",
    price: "R$ 8,00",
    image: require("../assets/croissantchocolate.jpg"),
    descricao: "croissant de chocolate",
    status: "sobremesas",
    destaque: true,
  },
  {
    id: 9,
    name: "Frango a parmegiana",
    price: "R$ 22,00",
    image: require("../assets/parmegiana.jpg"),
    descricao: "frango a parmegiana",
    status: "refeicoes",
    destaque: true,
  },
];
