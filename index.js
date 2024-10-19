const express = require("express");
const bodyParser = require("body-parser");
const { stringCalculator } = require("./string-calculator");

const initializeApp = async () => {
  const app = express();
  return app;
};

const startServer = async (app, port) => {
  app.use(bodyParser.json());

  app.use((req, res, next) => {
    // logger.info(`Incoming request for: ${req.url}`); // Uncomment if needed
    stringCalculator("3"); // Example function call
    next();
  });

  // Start the server and listen on the given port
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

// Initialize and start the server
initializeApp().then(async (app) => {
  const port = 3000;
  await startServer(app, port); // Start the server on port 3000
});
