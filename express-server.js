import express from 'express';

const app = express();

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



app.listen(PORT,
    () => {
        console.log(`Server is running on port ${PORT}`);
    })