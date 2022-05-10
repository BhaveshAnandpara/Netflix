const router = require("express").Router();
const User = require("../Models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");


//req.params.id returns id from /api/users/626d3b28dcfa1585b84569b6 basically "626d3b28dcfa1585b84569b6" 

//UPDATE

router.put("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true } //To update otherwise we will keep seeing unupdated one
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can update only your account!");
  }
});

//DELETE
router.delete("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can delete only your account!");
  }
});

//GET

router.get("/find/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get("/", verify, async (req, res) => {
  const query = req.query.new; //
  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(5) //sort({_id :-1}) gives in ascending order
        : await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed to see all users!");
  }
});

//GET USER STATS
router.get("/stats", async (req, res) => {
  const today = new Date();

  try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" }, //Jan will be converted to 1, feb->2 , etc
        },
      },
      {
        $group: {
          _id: "$month", 
          total: { $sum: 1 }, //{$sum:1} returns sum of user at that month     
                                                                                 /* { Results 

                                                                                "_id": 4, //4th month -> April
                                                                                "total": 3 //Users -> Users

                                                                                }*/
        },
      },
    ]);
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;