const {
  getAllLaunches,
  addNewLaunch,
} = require("../../modules/launches.module");

function httpgGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpPostNewLaunch(req, res) {
  const launch = req.body;
  launch.launchDate = new Date(launch.launchDate);
  console.log(typeof launch.launchDate);
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "Missing required launch property",
    });
  }

  if (launch.launchDate.toString() === "Invalid Date") {
    return res.status(400).json({
      error: "Invalid date !",
    });
  }

  addNewLaunch(launch);
  return res.status(200).json(launch);
}

module.exports = {
  httpgGetAllLaunches,
  httpPostNewLaunch,
};
