
import EventEmitter from "events";

const emitter = new EventEmitter();

const eventCounts = {
    "userLoggedIn":0,
    "user-Details":0,
    "userLoggedOut":0,
}


emitter.on("greet", (collegeName, semester) => {
    eventCounts["userLoggedIn"]++;
    console.log(`Hello BCA ${semester} studying in ${collegeName} ${eventCounts["userLoggedIn"]}`);
});

emitter.emit("greet", "Samriddhi", "6th Sem");

emitter.on("personalDetails", (detailsObject) => {
    console.log(`My Name is: ${detailsObject.name} & i am studying in ${detailsObject.college}`);
});

emitter.emit("personalDetails", 
    { name: "Ravi", age: 25, college: "Samriddhi", address: "Bhaktapur", },);