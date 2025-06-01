import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const PORT = 3001;

app.get("/",
    (req, res) => {
        //res.send("Hello User! Welcome to Samriddhi");
        res.json({ greetings: "Hello Welcome!!" });
    }
)

app.get("/about",

    (req, res) => {
        //res.send("This is about page");
        res.json({ name: "Ravi", age: 25 });
    }
)

app.get("/search",

    (req, res) => {
        const requestParams = req.query;
        console.log(requestParams);
        res.send("This is search page");
    }
)

app.post("/register",

    (req, res) => {
        const requestBody = req.body;
        console.log(requestBody);
        res.send("This is register page");
    }
)



app.listen(PORT,
    () => {
        console.log(`Server is running on port ${PORT}`);
    })