const nextISSTimesForMyLocation = require("./iss_promised.js")

nextISSTimesForMyLocation()
  .then((passTimes) => {
    console.log(passTimes)
  })
  .catch((error) => {
    console.log("nope something aint right", error.message)
  })