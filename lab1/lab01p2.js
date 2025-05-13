/*
C - > POST
Read - > GET
Update - > PUT or PATCH
Delete - > DELETE
*/

import http from "http";
import fs from "fs";

const server = http.createServer((req, res)=>{
    if (req.url === "/"){
        res.end("Hello World")
    }
    else if (req.url === "/about"){
        res.end("hello to the about page")
    }
    else if (req.url === "/contact"){
        const data = fs.readFileSync("./html/contact.html")
        res.end(data);
    }
    else if (req.url === "/methods"){
       if(req.method === "GET") {
        res.end("Hello to the GEt method");

       } else if (req.url === "POST") {
        res.end("Hello to the POST method");

       } else if (req.url === "PUT") {
        res.end("Hello to the PUT method");
       } 
    }
    else {
        res.end("404 page not found");
    }
});

server.listen(8000, ()=>{
    console.log(`http://localhost:8000`)
})

