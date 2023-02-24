const { getAllLaunches } = require("../../modules/launches.module");

function httpgGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

module.exports = {
  httpgGetAllLaunches,
};