const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

router.use("/books:id", bookRoutes);

module.exports = router;

