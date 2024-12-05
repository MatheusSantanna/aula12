exports.paginaInicial = (req, res) => {
  res.render("index");
};

exports.treatPost = (req, res) => {
  res.send("i'am new route");
};
