const notesCtrl = {};
const NewMmodel = require("../models/note");

notesCtrl.renderNotesForm = (req, res) => {
  res.render("pages/notes/newNotas");
};

notesCtrl.RenderAddNote = async (req, res) => {
  let { title, description } = req.body;
  const myNote = new NewMmodel({ title, Description: description });
  await myNote.save();
  console.log(myNote);
  req.flash("success_msg", "Añadido");
  res.redirect("/notes");
};

notesCtrl.RenderListNote = async (req, res) => {
  const notas = await NewMmodel.find();
  res.render("pages/notes/all-notes", { notas });
};

notesCtrl.RenderListFavorito = async (req, res) => {
  res.render("pages/notes/favoritos");
};

notesCtrl.RenderListOpinion = async (req, res) => {
  res.render("pages/notes/opinion");
};

notesCtrl.RenderListViajes = async (req, res) => {
  res.render("pages/notes/viajes");
};

notesCtrl.RenderEditForm = async (req, res) => {
  const note = await NewMmodel.findById(req.params.id);
  console.log("Recibido --->", note);
  res.render("pages/notes/edit-notes", { note });
};

notesCtrl.RenderUpdateForm = async (req, res) => {
  const { title, description } = req.body;
  console.log(req.body);
  const notas = await NewMmodel.findByIdAndUpdate(req.params.id, {
    title,
    Description: description,
  });
  req.flash("success_msg", "Actualizado");
  res.redirect("/notes");
};

notesCtrl.RenderDelteForm = async (req, res) => {
  await NewMmodel.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Eliminado");
  res.redirect("/notes");
};

module.exports = notesCtrl;
