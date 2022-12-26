const comentarioCtrl = {};

const comentarioModel = require("../models/comentario");

comentarioCtrl.postCommentario = async (req, res) => {
  let errors = [];
  const { message } = req.body;
  const nombreusuario = req.user.name;
  console.log(nombreusuario);
  const comentarios = await comentarioModel.find();

  if (message.length > 300) {
    errors.push({ text: "error1" });
  }

  if (errors.length > 0) {
    res.render("pages/notes/favoritos", { nombreusuario, comentarios });
  } else {
    const miComment = new comentarioModel({
      user: nombreusuario,
      mensaje: message,
    });
    const logo = req.user.image.data;
    const Typeimg = req.user.image.contentType;
    await miComment.save();
    res.render("pages/notes/favoritos", {
      nombreusuario,
      comentarios,
      logo,
      Typeimg,
    });
    console.log(miComment);
  }
};

module.exports = comentarioCtrl;
