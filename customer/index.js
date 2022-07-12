const express = require('express');
const app = express();

app.use(express.json());
app.use('/', (req, res, next) => {
    return res.status(200).json({ msg: "Hello from Customer" })
});

const PORT = 8081;
app.listen(PORT, () => {
    console.log('Customer is listening to PORT: ' + PORT);
})