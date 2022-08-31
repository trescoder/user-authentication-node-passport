function home(req, res) {
  res.status(200).send("<h1>First Attempt</h1>");
}

function signIn(req, res) {
  res.status(200).json({ body: req.body });
}

module.exports = {
  home,
  signIn,
};
