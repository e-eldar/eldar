const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

//Send message when new client is connected. Notification always pops out
wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    console.log('Received:', message);

    // Broad cast to all clients 
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
//On close, connection stop. Client loses connection. 
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
