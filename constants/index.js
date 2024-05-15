export const destaque = [

    {
        id:1, 
        name: 'Coxinha',
        price: 'R$ 6,50',
        image: require('../assets/coxinha.jpeg'),
        descricao: 'coxinha de frango com catupiry',
    },
    {
        id:2, 
        name: 'Pao de queijo',
        price: 'R$ 7,00',
        image: require('../assets/paodequeijo.jpg'),
        descricao: 'deliciosos paes de queijos, possuem 8 unidades',
    },
    {
        id:3, 
        name: 'Coca cola',
        price: 'R$ 6,00',
        image: require('../assets/coca.png'),
        descricao: 'coca cola 350ml',
    },

    {
        id:4, 
        name: 'Pao de batata',
        price: 'R$ 7,50',
        image: require('../assets/paodebatata.jpg'),
        descricao: 'delicioso pao de batata recheado de requeijao',
    },
]

export const Categorias = [
    {
        status: 'salgados'
    },
    {
        status: 'bebidas'
    },
    {
        status: 'sobremesas'
    },
    {
        status: 'refeicoes'
    },

]

export const produto = [
    {
        id:1, 
        name: 'Coxinha',
        price: 'R$ 6,50',
        image: require('../assets/coxinha.jpeg'),
        descricao: 'coxinha de frango com catupiry',
        status: 'salgados',
        destaque: true,
    },
    {
        id:2, 
        name: 'Pao de queijo',
        price: 'R$ 7,00',
        image: require('../assets/paodequeijo.jpg'),
        descricao: '8 deliciosos paes de queijo',
        status: 'salgados',
        destaque: true,
    },
    {
        id:3, 
        name: 'Pao de batata',
        price: 'R$ 6,50',
        image: require('../assets/paodebatata.jpg'),
        descricao: 'coxinha de frango com catupiry',
        status: 'salgados',
        destaque: false,
    },
    {
        id:4, 
        name: 'Enroladinho',
        price: 'R$ 7,50',
        image: require('../assets/coxinha.jpeg'),
        descricao: 'coxinha de frango com catupiry',
        status: 'salgados',
        destaque: false,
    },
    {
        id:5, 
        name: 'Coca cola',
        price: 'R$ 6,00',
        image: require('../assets/coca.png'),
        descricao: 'coca cola 350ml',
        status:'bebidas',
        destaque: true,
    },
    {
        id:6, 
        name: 'Chocolate',
        price: 'R$ 5,50',
        image: require('../assets/chocolate.jpg'),
        descricao: 'chocolate de merda',
        status: 'sobremesas',
        destaque: false,
    },
    {
        id:7, 
        name: 'Calabreso',
        price: 'R$ 7,50',
        image: require('../assets/coxinha.jpeg'),
        descricao: 'coxinha de frango com catupiry',
        status: 'salgados',
        destaque: false,
    },
]

export const bancod = [
    {
        id:1, 
        name: 'Coxinha',
        price: 'R$ 6,50',
        image: require('../assets/coxinha.jpeg'),
        descricao: 'coxinha de frango com catupiry',
        status: 'Salgados',
        cantina: 'Cantina 1',
        categoria: 'Destaque',
    },
    {
        id:2, 
        name: 'Pao de queijo',
        price: 'R$ 7,00',
        image: require('../assets/paodequeijo.jpg'),
        descricao: '8 deliciosos paes de queijo',
        status: 'Salgados',
        cantina: 'Cantina 2',
        categoria: 'Destaque',
    },
    {
        id:3, 
        name: 'Pao de batata',
        price: 'R$ 6,50',
        image: require('../assets/paodebatata.jpg'),
        descricao: 'coxinha de frango com catupiry',
        status: 'Salgados',
        cantina: 'Cantina 2',
        categoria: 'Destaque',
    },
    {
        id:4, 
        name: 'Coca cola',
        price: 'R$ 6,00',
        image: require('../assets/coca.png'),
        descricao: 'coca cola 350ml',
        status: 'Salgados',
        cantina: 'Cantina 3',
        categoria: 'Destaque',
    },
    {
        id:5, 
        name: 'Chocolate',
        price: 'R$ 5,50',
        image: require('../assets/chocolate.jpg'),
        descricao: 'chocolate de merda',
        status: 'Salgados',
        cantina: 'Cantina 3',
        categoria: 'Destaque',
    },
    {
        id:6, 
        name: 'Coca cola',
        price: 'R$ 6,00',
        image: require('../assets/coca.png'),
        descricao: 'coca cola 350ml',
        status: 'Salgados',
        cantina: 'Cantina 2',
        categoria: 'Destaque',
    },
    {
        id:7, 
        name: 'Chocolate',
        price: 'R$ 5,50',
        image: require('../assets/chocolate.jpg'),
        descricao: 'chocolate de merda',
        status: 'Salgados',
        cantina: 'Cantina 1',
        categoria: 'Destaque',
    },
    {
        id:8, 
        name: 'Coca cola',
        price: 'R$ 6,00',
        image: require('../assets/coca.png'),
        descricao: 'coca cola 350ml',
        status: 'Salgados',
        cantina: 'Cantina 2',
        categoria: 'Destaque',
    },
    {
        id:9, 
        name: 'Chocolate',
        price: 'R$ 5,50',
        image: require('../assets/chocolate.jpg'),
        descricao: 'chocolate de merda',
        status: 'Salgados',
        cantina: 'Cantina 1',
        categoria: 'Destaque',
    },
]

export const Cantinas = [
    {
        cantina: 'Cantina 1', 
    },
    {
        cantina: 'Cantina 2', 
    },
    {
        cantina: 'Cantina 3', 
    },
    
    

]