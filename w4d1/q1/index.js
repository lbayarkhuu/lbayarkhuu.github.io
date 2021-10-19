const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.post('/save', (req, res) => {
    const {
        key, 
        value
    } = req.body

    res.cookie(key,value);

    res.redirect(303, '/')
});

app.get('/', (req, res) => {
    console.log(req.cookies)
    res.render("index", {
        cookies: req.cookies
    });
});

app.listen(3000);