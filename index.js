const http = require('http');

var port = 3000;

//EXERCICE 1:

// const serveur = http.createServer((req, res) => {
//     res.write("Hello World");
//     res.end();

//     console.log(req.method);
//     console.log(req.url)
    
// })

// serveur.listen(port, ()=>{
//     console.log(`Le serveur s'execute sur http://localhost:${port}`);
// })


//EXERCICE 2:

// const serveur = http.createServer((req, res) => {

//     res.setHeader('Content-Type', 'text/plain; charset = utf-8')

//     switch (req.url){
//         case "/" : 
//             res.statusCode = 200;
//             res.write("<h1>Bienvenue sur notre page</h1>");
//         break;
//         case "/about" : 
//             res.statusCode = 200;
//             res.write("A propos de moi");
//         break;
//         default: 
//             res.statusCode = 404;
//             res.write("Erreur 404: Page non trouvee");
//     }

//     res.end();
    
// })

// serveur.listen(port, ()=>{
//     console.log(`Le serveur s'execute sur http://localhost:${port}`);
// })


//EXERCICE 3:

const url = require("url");

// const serveur = http.createServer((req, res) => {


//     const parseUrl = url.parse(req.url, true);    

//     if (parseUrl.pathname === '/search') {
//         const q = parseUrl.query.q; // récupère la valeur de "q"
    
//         console.log(parseUrl);
        
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ query: q }));
//       } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Not Found');
//       }
    
// })

// serveur.listen(port, ()=>{
//     console.log(`Le serveur s'execute sur http://localhost:${port}`);
// })


//EXERCICE 4:

// const serveur = http.createServer((req, res) => {


//     if (req.url == '/echo') {

//         req.method = 'POST';
//         req.headers.accept = 'application/json';

//         res.writeHead('Content-Type', 'application/json')
//         res.write(JSON.stringify(req));
//         res.end();
//     } else { res.end("Url invalide")};

// });
    
// serveur.listen(port, ()=>{
//     console.log(`Le serveur s'execute sur http://localhost:${port}`);
// })


// EXERCICE 5:

// let rep = '{"user-agent" : "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36", "upgrade-insecure-requests" : "1", "sec-ch-ua-platform" : "Linux"}'
// let Jsonrep = JSON.parse(rep);

// // console.log(Jsonrep);

// const serveur = http.createServer((req, res) => {

//     switch(req.url){

//         case "/headers":
//             res.writeHead(200, {"content-type" : "application/json"});
//             res.write(JSON.stringify(Jsonrep));
//             res.end();
//         break;
//         case "/unauthorized":
//             res.writeHead(404, {"content-type" : "text/plain; charset=utf8"});
//             res.end("Error 404: page not found");    
//         break;
//         default:
//             res.end("Url non valide")
//     }
// })
    

// serveur.listen(port, ()=>{
//     console.log(`Le serveur s'execute sur http://localhost:${port}`);
// })
