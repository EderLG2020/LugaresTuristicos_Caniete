const { Router } = require("express");
const multer = require("multer");

const router = Router();

// multer para obtener archivos
// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "/uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "files/");
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
router.post("/users/signup", upload.single("file"), signup);
router.get("/users/signin", renderSingInForm);
router.post("/users/signin", signin);
router.get("/users/logout", logout);

module.exports = router;
