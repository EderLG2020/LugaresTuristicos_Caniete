const comentarioCtrl = {};

const comentarioModel = require("../models/comentario");

comentarioCtrl.postCommentario = async (req, res) => {
  let errors = [];
  const { message } = req.body;
  const nombreusuario = req.user.name;
  console.log(nombreusuario);

  if (message.length > 300) {
    errors.push({ text: "error1" });
  }

  if (errors.length > 0) {
    res.render("pages/notes/favoritos", { nombreusuario });
  } else {
    const miComment = new comentarioModel({
      user: nombreusuario,
      mensaje: message,
    });
    await miComment.save();
    res.render("pages/notes/favoritos", { nombreusuario });
    console.log(miComment);
  }
};

module.exports = comentarioCtrl;
