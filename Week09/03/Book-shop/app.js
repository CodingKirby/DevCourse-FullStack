require('dotenv').config({ path: `${__dirname}/.env` });
const express = require('express');
const app = express();

// console.log(process.env.PRIVATE_KEY); // test if the env file is loaded correctly

app.listen(process.env.PORT);
app.use(express.json());

const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');
const categoryRouter = require('./routes/categories');
const likeRouter = require('./routes/likes');
const cartRouter = require('./routes/carts');
const orderRouter = require('./routes/orders');

app.use("/users", userRouter);
app.use("/books", bookRouter);
app.use("/categories", categoryRouter);
app.use("/likes", likeRouter);
app.use("/carts", cartRouter);
app.use("/orders", orderRouter);