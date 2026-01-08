import chalk from 'chalk';
import express from 'express';
import morgan from 'morgan';
import debug from 'debug';

const app = express();
const port = 3000;

app.get("/", (req, res) => {

    res.send('Hello WOrld');
})
app.get("/1", (req, res) => {

    res.send('Wolrd Hello');
})
app.use(morgan('combined'));
app.listen(port, () => {
    console.log(`listening on port ${chalk.blue(port)}`);
});