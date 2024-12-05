const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
// http:// /profiles/12345?campanha=googleads&nome_campanha=seila

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(routes);
// função para informar qual porta do servidor de ser acessada
app.listen(3000, () => {
  console.log("Acessa http://localhost:3000");
  console.log("server executando algo na porta 3000");
});
