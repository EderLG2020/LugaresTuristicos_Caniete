const { Schema, model } = require("mongoose");

const ComentarioSchema = new Schema(
  {
    user: {
      type: String,
      require: true,
    },
    mensaje: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("comentario", ComentarioSchema);
