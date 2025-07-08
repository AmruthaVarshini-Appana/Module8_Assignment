import http from "http";
import app from "./app";
import { initSocket } from "./socket/socket";

// Load environment variables (if needed here too)
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

// Create the HTTP server using Express app
const server = http.createServer(app);

// Initialize WebSocket on the server
initSocket(server);

// Start the server
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

// Optional: Handle server errors
server.on("error", (error) => {
  console.error("❌ Server failed to start:", error);
  process.exit(1);
});
