
var ws = new WebSocket('ws://localhost:3000/sockets.io/?EIO=3&transport=websocket');

ws.send({ 0: "add user", 1: "Robrinne"});

// A la connexion si ouverte
ws.onopen = function()
{
  console.log('WebSocket : Welcome');
}

ws.onerror = function(event)
{
  console.log(event);
}

// Reception des messages
ws.onmessage = function(data)
{
  console.log(data);
}
