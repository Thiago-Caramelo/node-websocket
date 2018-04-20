const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 80 });
 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  ws.send('something');
});

wss.on('error', function(err) {
  console.log('unexpeted error');
  console.log(arguments);
});

wss.on('listening', function(srv) {
  console.log('listening');
  console.log(srv);
});