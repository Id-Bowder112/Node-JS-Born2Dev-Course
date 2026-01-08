import chalk from 'chalk';
import express from 'express';
import morgan from 'morgan';
import debug from 'debug';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));
app.set("views", "./src/views");
app.set("views engine", "ejs")


app.get("/", (req, res) => {

    res.render('index.ejs', { username: "Pachara" });
})

app.listen(PORT, () => {
    console.log(`listening on port ${chalk.blue(PORT)}`);
});