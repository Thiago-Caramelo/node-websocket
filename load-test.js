const WebSocket = require('ws');

    const index = 0;
  
    const wss = new WebSocket('ws://localhost:5000');
 
    wss.on('open', function connection(ws) {
    
      setInterval(() => {
        if (wss.readyState === WebSocket.OPEN) {
          wss.send(`something back at : ${Date.now()} - ${index}`);
        }
      }, 3000);
    
    });
    
    wss.on('message', function incoming(message) {
      console.log(`received: ${message} - ${index}`);
    });
    
    wss.on('error', function(err) {
      console.log('unexpeted error');
      console.log(arguments);
    });
