const db = require("../models");

module.exports = {
  // post a checkIn
  post: async (req, res) => {
    // db.CheckIn.create(req.body).then((dbCheckIn) => {
    //     res.json({
    //         message: `Check-In added`
    //     })
    // })
    try {
      console.log("BODY", req.body);
      const dbCheckIn = await db.CheckIn.create(req.body);
      res.json({
        message: `Check-In added ${dbCheckIn}`,
        date: req.body.resetDate
      });
    } catch (error) {
      alert(error);
    }
  },
  // get a users most recent checkIn
  getOneRecent: async (req, res) => {
    console.log(req.params)
    try {
      const dbCheckIn = await db.CheckIn.find({ userId: req.params.id }).sort({
        resetDate: -1,
      });
      res.json(dbCheckIn);
    } catch (error) {
      alert(error);
    }
  },

  // get all of a users checkIns
};
