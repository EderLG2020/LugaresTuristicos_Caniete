const userCtrl = {};

const user = require("../models/user");
const { encrypPass, mathPass } = require("../helpers/encryp");
const passport = require("passport");

userCtrl.renderSingUpForm = (req, res) => {
  res.render("pages/users/signup");
};

userCtrl.signup = async (req, res) => {
  let errors = [];
  const { name, correo, password, confirm_password, checkxd, file } = req.body;
  console.log(file);

  // Vemos que las contraseñas sean iguales
  if (password != confirm_password) {
    req.flash("error_msg", "La contraseña no coincide");
    errors.push({ text: "error1" });
  }

  // Vemos que las contraseñas tengan mas de 5 carcteres
  if (password.length < 5) {
    req.flash(
      "error_msg",
      "La contraseña no puede tener menos de 5 caracteres"
    );
    errors.push({ text: "error2" });
  }

  // Acepta nuestros terminos y condiciones
  if (checkxd != "on") {
    req.flash("error_msg", "No acepto nuestros terminos y condiciones");
    errors.push({ text: "error3" });
  }

  if (errors.length > 0) {
    res.render("pages/users/signup");
  } else {
    const emailUser = await user.findOne({ email: correo });
    if (emailUser) {
      req.flash("error_msg", "el correo esta en uso");
      res.redirect("pages/users/signin");
    } else {
      await encrypPass(password)
        .then(async (newPass) => {
          const newUser = new user({
            name,
            email: correo,
            password: newPass,
            imagen: file,
          });
          await newUser.save();
          req.flash("success_msg", "User add Successfully");
          res.redirect("signin");
          console.log("guardado -> ", newUser);
        })
        .catch((e) => {
          console.log("Error en addUser ->", e);
        });
    }
  }
};

userCtrl.renderSingInForm = (req, res) => {
  res.render("pages/users/signin");
};

userCtrl.signin = passport.authenticate("local", {
  failureRedirect: "/users/signin",
  successRedirect: "/notes",
  failureFlash: true,
});

// No olvides importar la funcion match , igual te guiara la consola :v

// userCtrl.signin = async (req, res) => {
//   const { name, password } = req.body;
//   const emailUser = await user.findOne({ email: name });
//   console.log(emailUser);
//   const valor = mathPass(password, emailUser.password);
//   valor
//     .then((a) => {
//       if (a == true) {
//         res.send("Si funciona");
//         console.log(a, "Si funciona");
//       }
//       if (a == false) {
//         res.send("No funciona");
//       }
//     })
//     .catch((e) => {
//       console.log(e, "xd");
//     });
//   console.log(emailUser.password);
// };

userCtrl.logout = (req, res) => {
  req.logout(() => {
    console.log("Error en salir del login");
  });
  res.redirect("/users/signin");
};

module.exports = userCtrl;
