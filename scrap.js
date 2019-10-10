const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/posts', require('./api/routes/posts'));

module.exports = app;