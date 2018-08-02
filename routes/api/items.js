const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/item");

// @route GET api/items
// @desc Get All Items
// @access Public
router.get("/", (req, res) => {
    Item.find()
        .then(items => res.json(items))
});

// @route POST api/items
// @desc Create A Item
// @access Public
router.post("/", (req, res) => {
   const newItem = new Item({
       name: req.body.name,
       semestar: req.body.semestar,
       smjer: req.body.smjer
   });

   newItem.save().then(item => res.json(item));
});

// @route DELETE api/items
// @desc Delete A Item
// @access Public
router.delete("/:id", (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({sucess: true})))
        .catch(error => res.status(404).json({success: false}));
});



module.exports = router;