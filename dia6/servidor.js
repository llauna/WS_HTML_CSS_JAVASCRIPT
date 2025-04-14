//importar el módulo http
const http  = require('http');

//crear un servidor
const servidor = http.createServer((req, res) => {
    //enviar una repuesta al cliente
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hola, llaunas!\n');
});

// establecer la dirección y el puerto del servidor
const direccion = 'localhost';
const puerto = 3000;

// iniciar el servidor
servidor.listen(puerto, direccion, () => {
    console.log('Servidor iniciado en http://${direccion}:${puerto}/');
});


