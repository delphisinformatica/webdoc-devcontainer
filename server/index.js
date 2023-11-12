
const http = require('http')
const host = process.env.EXT_API_URL || '0.0.0.0'
const port = process.env.SERVER_PORT || 3000

srv = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World! modifica');
  res.end();
})

srv.listen(port, host, () => {
      console.log(`Server is running on http://${host}:${port}`);
});
