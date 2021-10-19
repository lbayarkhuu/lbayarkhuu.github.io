const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');

app.use(express.static('public'))

app.use(session({
    secret:'geeksforgeeks',
    saveUninitialized: true,
    resave: true
}));

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

app.get('/', (req, res) => {
    res.render("index", {
        products
    });
});

app.post('/addToCart', (req, res) => {
    let {id} = req.body
    let flag = false;

    if (!('products' in req.session)) {
        req.session['products'] = []
    }

    for (i = 0; i < req.session['products'].length; i++) {
        if (req.session['products'][i].id == id) {
            flag = true;
            req.session['products'][i].quantity++;
        }
    }

    if (!flag) {
        const prod = products.find(item => item.id == id)
        req.session['products'].push({
            ...prod,
            quantity: 1,
        })
    }

    console.log(req.session['products'])

    res.render("index", {
        products
    });
});

app.get('/cart', (req, res) => {
    if (!('products' in req.session)) {
        req.session['products'] = []
    }
    
    res.render("cart", {
        products: req.session['products']
    });
});

app.listen(3000);