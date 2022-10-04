const { Router } = require("express");

const router = Router();

const {
  renderNotesForm,
  RenderAddNote,
  RenderListNote,
  RenderEditForm,
  RenderUpdateForm,
  RenderDelteForm,
} = require("../controllers/notes.controller");

//^ Añadir
router.get("/notes/add", renderNotesForm);
router.post("/notes/add", RenderAddNote);

//^ Listar
router.get("/notes", RenderListNote);

//^ Edit
router.get("/notes/edit/:id", RenderEditForm);
router.put("/notes/edit/:id", RenderUpdateForm);

//^ Delete
router.delete("/notes/delete/:id", RenderDelteForm);

module.exports = router;
