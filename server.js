import express from 'express';
import mongoose from 'mongoose';
import Todo from "./model/todo_model.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = 3001;


const uri = "mongodb+srv://enigmadts:aA4g2SPaujutURP1@aspire-ledger-cluster.w1fm4.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri)
    .then(() => {
        console.log("Database Connected Successfully");
    }).catch((err) => {
        console.log('Error connecting to database', err);
    });

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
        res.json("This is register page");
    }
)

app.post("/create-todo", async (req, res) => {

   try{
    console.log(req.body);
    const todo = await Todo.create(req.body);
    todo.save();
    res.send("Todo created successfully!!");

   }catch(e){
    console.log("Something Went Wrong!!"+e);
   }

})



app.listen(PORT,
    () => {
        console.log(`Server is running on port ${PORT}`);
    })