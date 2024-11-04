const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

/* GET About Me page. */
router.get('/about', (req, res) => {
    res.render('about', { title: 'About Me' });
});

/* GET Projects page. */
router.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects' });
});

/* GET Contact Me page. */
router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
