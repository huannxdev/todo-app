const express = require("express");
const app = express();

const productRoute = require('./routes/ProductRouter');
const categoryRoute = require('./routes/categoryRouter');
const authRoute = require('./routes/auth.router');


const mongooes = require('mongoose');
const bodyParser = require("body-parser");

const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const dbString = process.env.MONGOURI;

mongooes.connect(dbString, {
    useNewUrlParser: true,
}).then(() => console.log('connect db successfully'),
() => console.log('cannot connect db'));

const initDbFunc = require('./utils/init-db').initRole;
initDbFunc();

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/product', productRoute );
app.use('/api/category', categoryRoute);
app.use('/api/auth', authRoute);

app.listen(3000, () => {
    console.log('Server running on port 3000');
})