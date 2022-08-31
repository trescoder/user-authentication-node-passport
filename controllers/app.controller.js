function home(req, res) {
  res.status(200).send("<h1>First Attempt</h1>");
}

module.exports = {
  home,
};
