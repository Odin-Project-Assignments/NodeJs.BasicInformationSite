import * as http from "http";
import * as fs from "fs";

const port: number = 8080;

const readHtml = (htmlFile: string, statusCode: number, res: http.ServerResponse): void => {
    fs.readFile(htmlFile, "utf8", (err, data) => {
        if (err) throw err;
        res.writeHead(statusCode, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
    })
}

http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.url === "/"){
        readHtml("./public/index.html", 200, res);
    } else if (req.url === "/about") {
        readHtml("./public/about.html", 200, res);
    } else if (req.url === "/contact-me") {
        readHtml("./public/contact-me.html", 200, res);
    } else {
        readHtml("./public/404.html", 404, res);
    }
}).listen(port, () => {
    console.log("Listening on port 8080...");
});
