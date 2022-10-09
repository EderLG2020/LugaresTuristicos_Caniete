const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
  res.render("pages/index");
};

indexCtrl.renderAbout = (req, res) => {
  res.render("pages/about");
};

module.exports = indexCtrl;
