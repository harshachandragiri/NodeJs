const http = require("http");
const fs = require("fs");
const querystring = require("querystring"); // npm i querystring

const server = http.createServer((req, res) => {
    if (req.method === "POST") {
        let formUrlEncoded = "application/x-www-form-urlencoded";
        if (req.headers['content-type'] === formUrlEncoded) {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
            });
            req.on("end", () => {
                let payload = querystring.parse(body);
                console.log(payload)
                // querystring is third party module its provide parse method, parse -> convert string data into object formate...
                let name = payload.name;
                let email = payload.email;
                let password = payload.password;

                fs.appendFile("./form.txt",`name=${name}\n email=${email}\n password=${password}\n`,(err) => {
                    if (err) {
                        res.writeHead(500, { "content-type": "text/html" });
                        res.end("Internal Server Error...")
                        console.log(err);
                    }
                    else{
                        res.writeHead(200, { "content-type": "text/html" });
                        res.end("Successfully Submitted...")
                    }
                });
            });
        }
    } 
    else {
        if (req.url === "/") {
            res.writeHead(200, { "content-type": "text/html" });
            let form = fs.createReadStream("./form.html");
            form.pipe(res);
        } 
        else if (req.url === "/txt") {
            res.writeHead(200, { "content-type": "text/plain" });
            let form = fs.createReadStream("./form.txt");
            form.pipe(res);
        } 
        else if (req.url === "/css") {
            res.writeHead(200, { "content-type": "text/css" });
            let form = fs.createReadStream("./form.css");
            form.pipe(res);
        } 
        else {
            res.end("404 page not found...");
        }
    }
});

const port = 5000;
server.listen(port, (err) => {
  if (err) throw err;
  console.log(`server running on port ${port}`);
});