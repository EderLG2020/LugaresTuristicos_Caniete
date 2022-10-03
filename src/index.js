const app = require("./server");

require("./database");

app.listen(app.get("port"), () => {
  console.log("Server en linea", app.get("port"));
});
