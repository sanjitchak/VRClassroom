const express = require('express');
var path = require('path');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');

// Set public folder as root
app.use(express.static('public'));

// Provide access to node_modules folder
app.use('/scripts', express.static(`${__dirname}/node_modules/`));
app.use(express.static(__dirname + '/static'));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/room', function(req, res) {
    res.sendFile(path.join(__dirname + '/room.html'));
});
app.get('/teacher', function(req, res) {
    res.sendFile(path.join(__dirname + '/t_view.html'));
});
app.get('/student', function(req, res) {
    res.sendFile(path.join(__dirname + '/s_view.html'));
});
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info('listening on %d', port);
});
