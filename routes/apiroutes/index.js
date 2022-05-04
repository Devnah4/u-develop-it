const express = require("express");
const router = express.Router();

// Links to the other routes
router.use(require("./candidateRoutes"));
router.use(require("./partyRoutes"));
router.use(require("./voterRoutes"));
router.use(require("./voteRoutes"));

module.exports = router;
