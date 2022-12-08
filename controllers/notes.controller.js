const notesCtrl = {};
const NewMmodel = require("../models/note");
const comentarioModel = require("../models/comentario");

notesCtrl.renderNotesForm = (req, res) => {
  console.log(req.user);
  const nombreusuario = req.user.name;
  res.render("pages/notes/newNotas", { nombreusuario: nombreusuario });
};

notesCtrl.RenderAddNote = async (req, res) => {
  let { title, description } = req.body;
  // const nombreusuario = req.user.name;
  const myNote = new NewMmodel({
    title,
    Description: description,
  });
  myNote.user = req.user.id;
  await myNote.save();
  console.log(myNote);

  req.flash("success_msg", "Añadido");
  res.redirect("/notes");
};

notesCtrl.RenderListNote = async (req, res) => {
  const notas = await NewMmodel.find({ user: req.user.id });
  const nombreusuario = req.user.name;
  console.log(req.user.name);
  res.render("pages/notes/all-notes", { notas, nombreusuario });
};

notesCtrl.RenderListFavorito = async (req, res) => {
  const comentarios = await comentarioModel.find();
  const nombreusuario = req.user.name;
  res.render("pages/notes/favoritos", { nombreusuario, comentarios });
};

notesCtrl.RenderListOpinion = async (req, res) => {
  const nombreusuario = req.user.name;
  console.log(req.user.name);
  res.render("pages/notes/opinion", { nombreusuario });
};

notesCtrl.RenderListViajes = async (req, res) => {
  const nombreusuario = req.user.name;
  console.log(req.user.name);
  res.render("pages/notes/viajes", { nombreusuario });
};

notesCtrl.RenderEditForm = async (req, res) => {
  const note = await NewMmodel.findById(req.params.id);
  console.log("Recibido --->", note);
  const nombreusuario = req.user.name;
  res.render("pages/notes/edit-notes", { note, nombreusuario });
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
