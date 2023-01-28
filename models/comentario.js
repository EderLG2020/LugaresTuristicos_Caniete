const { Schema, model } = require("mongoose");

const ComentarioSchema = new Schema(
  {
    user: {
      type: String,
      require: true,
      // type: Schema.ObjectId,
      // ref: "User",
    },
    mensaje: {
      type: String,
      require: true,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Comentario", ComentarioSchema);
