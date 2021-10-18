const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

let products = [
    {
        id: 0,
        name: 'apple',
        description: 'apple',
        image: 'images/apple.png',
        price: 2.99,
    },
    {
        id: 1,
        name: 'grapes',
        description: 'grapes',
        image: 'images/grapes.png',
        price: 3.18,
    }
]

let cartProducts = [
]


app.get('/', (req, res) => {
    res.render("index", {
        products
    });
});

app.post('/addToCart', (req, res) => {
    let {id} = req.body
    let flag = false;

    for (i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i].id == id) {
            flag = true;
            cartProducts[i].quantity++;
        }
    }

    if (!flag) {
        const prod = products.find(item => item.id == id)
        cartProducts.push({
            ...prod,
            quantity: 1,
        })
    }

    console.log(cartProducts)

    res.render("index", {
        products
    });
});

app.get('/cart', (req, res) => {
    res.render("cart", {
        products: cartProducts
    });
});

app.listen(3000);