const express = require('express');
const app = express();
const axios = require('axios');

// application servers
const servers = [
  'http://localhost:3000',
  'http://localhost:3001'
]

let currentServer = 0;
app.use(async (req, res) => {
  // extract properties from request
  const { url, method, headers, body } = req;

  // select current server
  const server = servers[currentServer];

  // update track to select next server
  currentServer === (servers.length - 1) ? currentServer = 0 : currentServer++;

  try {
    // request to application server
    const response = await axios({
      url: `${server}${url}`,
      method: method,
      headers: headers,
      data: body
    });
    // send back the response data as a load balancer response
    res.send(response.data);
  }
  catch (err) {
    // send back the error as a load balancer responser 
    return res.status(500).send("Server error!")
  }
});

app.listen(8080, err => err ? console.log("Failed to listen on port 8080") : console.log("Load balancer server is listening on port 8080"));