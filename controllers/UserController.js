const login = (req, res) => {
  const body = req.body;
  let err, user;
  res.status(200).send("User is LoggedIn!");
};
module.exports.login = login;


const createUser = (req, res) => {
  const body = req.body;
  res.status(201).json({...body,id:Math.floor(Math.random()*10000)});
};

module.exports.createUser = createUser;
