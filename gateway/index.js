const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const customerPORT = 8081;
const productPORT = 8082;
const shoppingPORT = 8083;
const PORT = 8080;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/customer', proxy(`http://localhost:${customerPORT}`));
app.use('/shopping', proxy(`http://localhost:${shoppingPORT}`));
app.use('/', proxy(`http://localhost:${productPORT}`));

app.listen(PORT, () => {
    console.log('Gateway is listening to PORT: ' + PORT);
})