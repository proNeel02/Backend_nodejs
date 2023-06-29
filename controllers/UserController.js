const login = (req, res) => {
  const body = req.body;

  const {name, email, phoneNumber} = body;

  if(!name || !email || !phoneNumber){
    res.status(400).json({message:"Bad Request!"});
     return;  
} 

  res.status(200).send("User is LoggedIn!");
};
module.exports.login = login;


const createUser = (req, res) => {
  const body = req.body;
  
  const {name, email, phoneNumber} = body;

  if(!name || !email || !phoneNumber){
    res.status(400).json({message:"Bad Request!"});
     return;  
} 
  res.status(201).json({...body,id:Math.floor(Math.random()*10000)});
};

module.exports.createUser = createUser;
