const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    image: {
      name: String,
      desc: String,
      img: {
        data: Buffer,
        contentType: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.method.encrypPass = async (password) => {
  const salto = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salto);
};

UserSchema.method.mathPass = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model("user", UserSchema);
