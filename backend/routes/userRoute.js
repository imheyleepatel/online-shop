import express from 'express';
import User from '../model/userModel';
import { getToken, isAuth } from '../utill'

const router = express.Router();

router.post('/signin',  (req, res) => {
  console.log(req.body);
  const signinUser =  User.findOne({
    email: req.body.email,
    password: req.body.password
  });
  if (signinUser) {
    res.send({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser)
    })
  } else {
    res.status(401).send({ msg: 'Invalid Email or Passeord.' });
  }
})

router.post('/register',   (req, res) => {
  console.log("register")
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  const newUser =  user.save();
  if (newUser) {
    res.send({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: getToken(newUser),
    });
  } else {
    console.log("error")
    res.send("error" , error)
    // res.status(401).send({ message: 'Invalid User Data.' });
  }
});


router.get("/createadmin", async (req, res) => {
  try {
    const user = new User({
      name: 'Helly',
      email: 'heyahelly@gmail.com',
      password: '123',
      isAdmin: true
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ msg: error.message });
  }
});

export default router;