
import fs from "fs";
import http from "http";
import path from "path";
import url from "url";

const PORT = 9000;

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const mimeType = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
};

http
  .createServer((req, res) => {
    console.log(`  ${req.method} ${req.url}`);

    const parsedUrl = url.parse(req.url);

    let sanitizedPath = path
      .normalize(parsedUrl.pathname)
      .replace(/^(\.\.[\/\\])+/, "")
      .substring(1);

    if (sanitizedPath === "API_KEY") {
      res.end(API_KEY);
      return;
    }

    if (sanitizedPath === "") {
      sanitizedPath = "index.html";
    }

    const ext = path.parse(sanitizedPath).ext;

    try {
      const data = fs.readFileSync(sanitizedPath);

      if (mimeType[ext]) {
        res.setHeader("Content-Type", mimeType[ext]);
      }
      res.end(data);
    } catch (err) {
      res.statusCode = 404;
      res.end();
    }
  })
  .listen(parseInt(PORT));

console.log(
  `Server listening. Pages:\n - http://localhost:${PORT}\n - http://localhost:${PORT}/chat.html`,
);
