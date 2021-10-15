const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

const date_ob = new Date();
const hour = date_ob.getHours();

console.log(hour)

if (6 <= hour && hour <= 18) {
    app.use('/style.css', express.static(path.join(__dirname, 'public/day.css')));
} else {
    app.use('/style.css', express.static(path.join(__dirname, 'public/night.css')));
}

app.get('/', (req, res) => {
    res.redirect('index.html')
});

app.listen(3000);