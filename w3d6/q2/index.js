const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.get('/', (req, res) => {
    res.render("form");
});

app.post('/submit-form', (req, res) => {
    let {name, age} = req.body

    if (!name) {
        name = `person`;
    }

    if (!age) {
        age = `Please give me your age.`
    } else {
        age = `Your age is ${age}`
    }
    res.send(`Welcome ${name}. ${age}`);
});

app.listen(3000);