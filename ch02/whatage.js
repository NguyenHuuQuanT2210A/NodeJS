const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { name, year } = parsedUrl.query;

  if (!name || !year) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Please provide both name and year parameters.');
    return;
  }

  const currentYear = new Date().getFullYear();
  const age = currentYear - parseInt(year, 10);

  const response = `${name} is ${age} years old.`;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(response);
});

const PORT = 8081;
server.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
});