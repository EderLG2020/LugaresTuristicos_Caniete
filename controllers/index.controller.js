const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
  res.render("pages/index");
};

indexCtrl.renderAbout = (req, res) => {
  res.send("pages/about");
};

module.exports = indexCtrl;
