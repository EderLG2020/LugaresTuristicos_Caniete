const { Router } = require("express");
const { isAuthenticate } = require("../helpers/validateUrl");
const router = Router();
const {
  postCommentario,
  listCommentario,
} = require("../controllers/comentario.controller");

router.post("/comentario/add", isAuthenticate, postCommentario);

module.exports = router;
