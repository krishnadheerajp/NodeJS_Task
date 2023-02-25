var http=require("http");
var fs=require("fs");
http.createServer(function (request,response){
if(request.url=="/"){
    response.writeHead(200,{'Content-Type':'application/json'});
    // response.write("<h1>Hi, Dheeraj</h1>\n");
    response.write(JSON.stringify({Message:"Hello World"}));
    response.end();
}
else if(request.url=="/about"){
    response.write("<h1>Hi, Dheeraj. Welcome to about us page</h1>\n");
    response.end();
}
else if(request.url="/myform"){
    fs.readFile("reg.html",function(err,data){
        response.write(data);
        response.end();
    });
}
else{
    response.end("Invalid Request");
}
}).listen(3000);
console.log("Server running at http://localhost:3000");
