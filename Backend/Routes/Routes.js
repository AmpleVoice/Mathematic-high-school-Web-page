//express router
const express = require('express');
const router = express.Router();
const User = require('../Models/usermodel');

router.get('/', (req, res) => {
    res.send('Home Page');
});

router.get('/login', (req, res) => {
    res.send('Login!');
});

router.get('/register',  (req, res) => {
    res.send('Register!');
});

router.get('/general', (req, res) => {
    res.send('Actualy the real page');
});

router.post('/general', async (req, res) => {const {username, email, password, role} = req.body;
    try{
            const newUser = await User.create({username, email, password, role})
        res.status(201).json(newUser);
    }
    catch(err){
        res.status(400).send(err.message);
    }

    res.send('New account created');
});

router.get('/about', (req, res) => {
    res.send('About us');
});

router.get('/chat', (req, res) => {
    res.send('Chat page');
});

module.exports = router;