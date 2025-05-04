import fetch from "node-fetch";

const fetchUsers = ()=>{
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if(!response.ok){
            throw new Error("Something went wrong");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
}

fetchUsers();