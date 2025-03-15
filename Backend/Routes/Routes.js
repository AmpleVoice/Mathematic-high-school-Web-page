//express router
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Home Page');
});

router.get('/login', (req, res) => {
    res.send('Login!');
});

router.get('/register', (req, res) => {
    res.send('create account');
});

router.get('/general', (req, res) => {
    res.send('Actualy the real page');
});

router.post('/general', (req, res) => {
    res.send('New account created');
    res.redirect('/general');
});

router.get('/about', (req, res) => {
    res.send('About us');
});

router.get('/chat', (req, res) => {
    res.send('Chat page');
});

module.exports = router;