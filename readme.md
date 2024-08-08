# Load Balancer Example
This project demonstrates a simple load balancer using Node.js, Express, and Axios. The load balancer distributes incoming HTTP requests across multiple application servers to balance the load and improve the performance and reliability of your system.

## Project Structure
- **config.js**: Implements the load balancer logic, forwarding requests to the application servers.
- **index.js**: Sets up two mock application servers that the load balancer will distribute requests to.

## How It Works
The load balancer is a lightweight server that receives incoming HTTP requests and forwards them to one of the available application servers. The requests are distributed in a round-robin fashion, meaning that each server gets the same number of requests over time.

### Load Balancer (config.js)
- Listens on port `8080`.
- Forwards requests to two application servers running on `http://localhost:3000` and `http://localhost:3001`.
- Each incoming request is routed to one of the servers based on a round-robin algorithm.
- Sends back the response from the selected server to the client.

### Application Servers (index.js)
- Two simple Express servers running on ports `3000` and `3001`.
- Each server responds with a message indicating which server handled the request.

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/MananKansara26/load-balancer-example.git
cd load-balancer-example
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Project
```bash
npm start
```

The command `npm start` runs the start script defined in the `package.json` file. The start script is defined as `npx concurrently "node config.js" "node index.js"`. 

This command uses `npx` to run the `concurrently` package, which allows multiple commands to be executed simultaneously. 

- `"node config.js"` starts the load balancer server defined in `config.js` on port 8080.
- `"node index.js"` starts two application servers defined in `index.js`, one on port 3000 and the other on port 3001.

The `concurrently` tool ensures that both processes run at the same time, allowing the load balancer and the application servers to operate together seamlessly.

### 4. View the Output
Once the project is running, you can view the output by sending HTTP requests to the load balancer on `http://localhost:8080`.

Each time you run this command, you should see the response from one of the application servers, alternating between the two:
```bash
Response from server 1
```
```bash
Response from server 2
```