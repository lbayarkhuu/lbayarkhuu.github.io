const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
// const flash = require('connect-flash');
// const cookieParser = require('cookie-parser');

app.use(express.static('public'))

app.use(session({
    secret:'geeksforgeeks',
    saveUninitialized: true,
    resave: true
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.redirect('form.html')
});

app.post('/submit-form', (req, res) => {
    let {name, age} = req.body

    req.session['name'] = name;
    req.session['age'] = age;

    res.redirect('/output')
});

app.get('/output', (req, res) => {  
    res.render('index', {
        name: req.session['name'],
        age: req.session['age']  
    })
})

app.listen(3000);