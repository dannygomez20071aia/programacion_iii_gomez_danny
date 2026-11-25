import { createServer } from 'node:http';

const server = createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Bienvenido al portal de Recursos Humanos\n');
    } else if (req.url === '/api/colaboradores' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        const data = {
            area: 'Recursos Humanos',
            colaboradores: 24,
            estado: 'operativa'
        };
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 - Recurso no encontrado\n');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor de Recursos Humanos en http://127.0.0.1:3000');
});
