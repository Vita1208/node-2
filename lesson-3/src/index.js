import express, { request, response } from "express";
 
const app = express(); //web-server
        // "/" -перший аргумент, адреса на яку пришла відповідь 
app.get("/", (request, response) => { // запит на головну сторонку reques - інформація про запит 
    response.send("<h1>Home page</h1>"); //виправляєм на сервер HTTL - інструмент, 
                                         //який дозволяє наоаштувати і відправити відповід
})

app.get("/contacts", (request, response) => { // запит на contacts
    console.log(request.url);
    console.log(request.method);
    response.send("<h1>Contacts page</h1>");
})

app.listen(3000, () => console.log("server running 3000 port ")); // запуск сервера http://localhost:3000/
