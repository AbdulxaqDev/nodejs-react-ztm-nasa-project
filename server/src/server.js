const http = require("http");

const app = require("./app");

const { loadPlanetsData } = require("./modules/planets.module");

const PORT = Number(process.env.PORT) || 8000;

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Server is listening port ${PORT}`);
  });
}

startServer();
