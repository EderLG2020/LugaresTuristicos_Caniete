const { Schema, model } = require("mongoose");

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    Description: {
      type: String,
      require: true,
    },
    user: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Notes", NoteSchema);
