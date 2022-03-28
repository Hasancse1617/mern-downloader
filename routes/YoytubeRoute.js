const app = require("express");
const { fetchVideo, downloadVideo } = require("../controllers/YoutubeController");
const router = app.Router();

router.post("/video", fetchVideo);
router.post("/download-video", downloadVideo);

module.exports = router;