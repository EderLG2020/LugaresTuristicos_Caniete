const { Router } = require("express");
const routes = Router();
const { renderIndex, renderAbout } = require("../controllers/index.controller");

routes.get("/", renderIndex);

routes.get("/about", renderAbout);

module.exports = routes;
