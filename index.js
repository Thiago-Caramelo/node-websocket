const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 5000 });
 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  ws.send('something');

  setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(`something at : ${Date.now()}`);
    }
  }, 3000);

});

wss.on('error', function(err) {
  console.log('unexpeted error');
  console.log(arguments);
});

wss.on('listening', function(srv) {
  console.log('listening');
  console.log(srv);
});