// server.mjs

import { createServer } from 'node:http';

const server = createServer((req, res) => {
  // Verificamos la ruta (URL) y el método HTTP usando condicionales if
  
  if (req.url === '/' && req.method === 'GET') {
    // Ruta de inicio
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('¡Bienvenido a la página principal!\n');
    
  } else if (req.url === '/api/data' && req.method === 'GET') {
    // Ruta que devuelve datos en formato JSON
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    
    const data = {
      mensaje: '¡Hola desde la API!',
      estado: 'exitoso',
      fecha: new Date().toISOString()
    };
    
    res.end(JSON.stringify(data));
    
  } else {
    // Si la ruta no coincide con ninguna de las anteriores (Error 404)
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 - Ruta no encontrada\n');
  }
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Servidor escuchando en http://127.0.0.1:3000');
});