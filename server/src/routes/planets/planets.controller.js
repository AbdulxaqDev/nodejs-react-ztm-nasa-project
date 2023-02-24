const { getAllPlanets } = require("../../modules/planets.module");

function httpGetAllPlanets(req, res) {
  return res.json(getAllPlanets());
}

module.exports = {
  httpGetAllPlanets,
};
