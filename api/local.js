
const app = require('./app.js');
const config = require('./config');
const port = config.port;
  
// Server
app.listen(port, () => {
	console.log(`Listening on: http://localhost:${port}`);
});
  
