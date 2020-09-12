const express = require("express");
const app = express();

const productRoute = require('./routes/ProductRouter');
const categoryRoute = require('./routes/categoryRouter');

const dotenv = require('dotenv');
const mongooes = require('mongoose');
const bodyParser = require("body-parser");

dotenv.config({path: './config.env'});
const dbString = process.env.MONGOURI;

mongooes.connect(dbString, {
    useNewUrlParser: true,
}).then(() => console.log('connect db successfully'),
() => console.log('cannot connect db'));

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/product', productRoute );
app.use('/api/category', categoryRoute);

app.listen(3000, () => {
    console.log('Server running on port 3000');
})