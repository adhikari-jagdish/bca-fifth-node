
import http from 'http';

const PORT = 3001;

const server = http.createServer(
    (req, res)=>{
        res.end(`Hello welcome to server, port number is ${PORT}`);
    }
)

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

