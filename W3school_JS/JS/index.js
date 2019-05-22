var http = require("https");

var options = {
    "method": "GET",
    "hostname": "jsonplaceholder.typicode.com",
    "port": null,
    "path": "/users",
    "headers": {
        "authorization": "Basic Og==",
        "cache-control": "no-cache",
        "postman-token": "0e1295ed-41f7-fbfb-9fd2-87de69d807de"
    }
};

var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        var test = Buffer.concat(chunks);
        var datos = JSON.parse(test.toString());
        console.log(datos[1]);
        //console.log(test);
    });
});

req.end();

