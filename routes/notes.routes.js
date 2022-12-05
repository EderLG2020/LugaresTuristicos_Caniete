const { Router } = require("express");
const { isAuthenticate } = require("../helpers/validateUrl");
const router = Router();

const {
  renderNotesForm,
  RenderAddNote,
  RenderListNote,
  RenderEditForm,
  RenderUpdateForm,
  RenderDelteForm,
  RenderListFavorito,
} = require("../controllers/notes.controller");

//^ Añadir
router.get("/notes/add", isAuthenticate, renderNotesForm);
router.post("/notes/add", isAuthenticate, RenderAddNote);

//^ Listar
router.get("/notes", isAuthenticate, RenderListNote);
router.get("/favorito", isAuthenticate, RenderListFavorito);

//^ Edit
router.get("/notes/edit/:id", isAuthenticate, RenderEditForm);
router.put("/notes/edit/:id", isAuthenticate, RenderUpdateForm);

//^ Delete
router.delete("/notes/delete/:id", isAuthenticate, RenderDelteForm);

module.exports = router;
