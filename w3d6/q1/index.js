const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();

    res.render("index", {
        time: date.toTimeString(),
        css: (6 <= hour && hour <= 18) ? 'day.css' : 'night.css',
    });
});
app.listen(3000);