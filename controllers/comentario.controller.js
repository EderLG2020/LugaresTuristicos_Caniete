const comentarioCtrl = {};

// const store = require("../store/comentarioStore");
const comentarioModel = require("../models/comentario");

comentarioCtrl.postCommentario = async (req, res) => {
  let errors = [];
  const { message } = req.body;
  // const nombreusuario = req.user.id;
  const nombreusuario = req.user.name;
  console.log(nombreusuario);

  const comentarios = await comentarioModel.find();
  console.log(comentarios);
  if (message.length > 300) {
    errors.push({ text: "error1" });
  }

  if (errors.length > 0) {
    res.render("pages/notes/favoritos", { nombreusuario, comentarios });
  } else {
    const img = {
      data: req.user.image.data,
      contentType: req.user.image.contentType,
    };
    const miComment = new comentarioModel({
      user: nombreusuario,
      mensaje: message,
      image: img,
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
  }
};

module.exports = comentarioCtrl;
