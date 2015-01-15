var app = require('./server-config.js');

var port = env.process.PORT || 4568;

app.listen(port);

console.log('Server now listening on port ' + port);
