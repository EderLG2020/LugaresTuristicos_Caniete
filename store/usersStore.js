const multer = require("multer");
const { Router } = require("express");

const router = Router();

// multer para obtener archivos

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/files");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const {
  renderSingInForm,
  renderSingUpForm,
  signin,
  logout,
  signup,
} = require("../controllers/users.controller");

//^ Añadir
router.get("/users/signup", renderSingUpForm);
router.post("/users/signup", upload.single("avatar"), signup);
router.get("/users/signin", renderSingInForm);
router.post("/users/signin", signin);
router.get("/users/logout", logout);

module.exports = router;
