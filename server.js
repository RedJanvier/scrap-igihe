const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer(require('./scrap'));

server.listen(PORT, () => console.log(`server started at localhost:${PORT}`));