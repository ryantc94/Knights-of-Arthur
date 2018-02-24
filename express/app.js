
import express from 'express';
import path from 'path';
import ws from 'ws';

const app = express();

// This code will allow any file found in the public directory in your project to be served as a static file!
const publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

app.get('/', (req, res) => {
	res.sendfile(__dirname + '/ws.html');
});

app.listen(3000);



