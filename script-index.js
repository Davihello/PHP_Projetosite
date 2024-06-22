//Adiciona Produtos dentro dos cards
const product = [
    {
        id: 1, 
        image : 'imagem/frutas/manga.png', //local aonde se encontra a foto
        title: 'Manga', //titulo 
        price: 'R$2,99', //preço
    },
    {
        id: 2, 
        image : 'imagem/frutas/kiwi.png',
        title: 'kiwi',
        price: 'R$3,99',
    },
    {
        id: 3, 
        image : 'imagem/frutas/banana.jpg',
        title: 'Banana',
        price: 'R$3,99',
    },
    {
        id: 4, 
        image : 'imagem/frutas/brocolis.jpg',
        title: 'brocolis',
        price: 'R$1,99',
    },
    
    {
        id: 5, 
        image : 'imagem/frutas/alface.jpg',
        title: 'Alface',
        price: 'R$1,80',
    },
    
    {
        id: 6, 
        image : 'imagem/frutas/abacaxi.png',
        title: 'Abacaxi',
        price: 'R$3,99',
    },

    {
        id: 7, 
        image : 'imagem/frutas/mamao.jpg',
        title: 'Mamão',
        price: 'R$4,99',
    },

    {
        id: 8, 
        image : 'imagem/frutas/manga.png',
        title: 'Manga',
        price: 'R$2,99',
    },

    {
        id: 9, 
        image : 'imagem/frutas/melao.png',
        title: 'Melão',
        price: 'R$3,99',
    },

    {
        id: 10, 
        image : 'imagem/frutas/pessego.png',
        title: 'Pessego',
        price: 'R$7,99',
    },

    {
        id: 11, 
        image : 'imagem/frutas/maça.png',
        title: 'Maçã',
        price: 'R$5,99',
    },

]



//Controle de Busca
const categories = [...new Set(product.map((item)=>
        {return item}))]

let cart = document.getElementById('root')
cart.innerHTML = categories.map((item)=>
{

    var {image, title, price} = item;
    return(
        `<div class="box">
            <div class=img-box">
                <img src=${image}></img>
        </div>
        <div class="left">
            <p>${title}</p>
            <h2>${price}</h2>
        <button>adicionar ao carrinho</button>
            </div>
        </div>`
    )           
}).join('')



