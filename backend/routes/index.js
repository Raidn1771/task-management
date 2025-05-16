const express = require('express');

const router = express.Router();

const todoRoute = require('./todoRoute');
const userRoute = require('./userRoute');

router.use('/todo', todoRoute);
router.use('/user', userRoute);

module.exports = router;
