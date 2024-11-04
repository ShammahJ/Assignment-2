const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


// Setting EJS as the templating engine
app.set('view engine', 'ejs');
app.set('view', path.join(__dirname, 'views/partials'));


// Serve statice files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'routes')));


// Routes

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/aboutme', (req, res) => {
    res.render('about me');
});

app.get('/project', (req, res) => {
    res.render('projects');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});


app.listen(PORT, () => {
    console.log('Server is running a http://localhost:${PORT');

});

