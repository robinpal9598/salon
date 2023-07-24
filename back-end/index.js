const nodemailer = require('nodemailer');
const express = require('express');
var cors = require('cors')
require("./db/Config")
const { body, validationResult } = require('express-validator');
const app = express();
const JWT=process.env.JWT;
const fetchUsers = require('./middleware/fetchUser');
app.use(express.json());
const mongoose = require('mongoose');
const User = require('./db/User');
const Form = require('./db/Form');
const Blog = require('./db/Blog');
var bcrypt = require('bcryptjs');
const { OAuth2Client } = require('google-auth-library');
var jwt = require('jsonwebtoken');
app.use(cors());
const client = new OAuth2Client('807077593811-hjoq9pi53u2pr27p7hd3h40o8b1omv1v.apps.googleusercontent.com');
const fetchUser = require('./middleware/fetchUser');

// Registration of the new user using the post request
app.post('/register', [
  body('email', "Enter a valid email").isEmail(),
  body('name', "Enter a valid name").isLength({ min: 2 }),
  body('password', "Enter a valid password").isLength({ min: 5 })
], async (req, resp) => {

  //check whether the user with this email exist or not
  try {
    let success = false;
    const error = validationResult(req);
    if (!error.isEmpty()) {

      return resp.status(400).json({ error: error.array()[0] });

    }
    let users = await User.findOne({ email: req.body.email });
    if (users) {
      return resp.status(400).json({ error: "Sorry user with this email already exist" })
    }
    const salt = await bcrypt.genSalt(12);
    let pass = await bcrypt.hash(req.body.password, salt)
    let answer = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: pass
    })
    const data = {
      answer: {
        id: answer.id
      }
    }
    success = true;
    var token = jwt.sign(data, JWT);
    resp.json({ token, success })
  }
  catch (error) {
    console.log(error);
    resp.send("error found")

  }


})
//Login using the POST Request......................................................
app.post('/login', [
  body('email', "Enter a valid email").isEmail(),
  body('password', "Please enter a password").exists(),
], async (req, resp) => {
  let success = false;
  try {
    let user = await User.findOne({ email: req.body.email })
    if (!user) {
      return resp.status(404).json({ errors: "Enter the correct credentials" });
    }
    let email = user.email;
    let name = user.name;
    let userId = user._id;
    let resultCompare = await bcrypt.compare(req.body.password, user.password);
    if (!resultCompare) {
      success = false;
      return resp.status(404).json({ errors: " correct password please" });

    }
    const data = {
      user: {
        id: user.id
      }
    }

    var token = jwt.sign(data, JWT);
    success = true;
    resp.json({ success, token, email, name, userId });
  }
  catch (error) {
    success = false
    resp.send({ success, "error": error });
  }
})
//Book the appointment using the POST Method.......................................................................................................................................
app.post('/appointment', fetchUsers, async (req, resp) => {
  const { name, date, email, phone, services, flag } = req.body;


  const note = await new Form({
    name, date, email, phone, services, flag, user: req.user.id
  })
  const savedNote = await note.save();

  resp.json(savedNote);
})
//fetch all the upcoming appointment of the person..........................................................................................................................................

try {
  const currentDate = new Date();
  const currentDayStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  app.get('/receipt', fetchUsers, async (req, resp) => {
    let user = await Form.find({ user: req.user.id, date: { $gte: currentDayStart } })
    resp.json(user);
  })
} catch (error) {
  resp.send({ success, "error": error });
}
//fetch all the passed appointment of the user.................................................................................................................................................
try {
  const currentDate = new Date();
  const currentDayStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

  app.get('/prevReceipt', fetchUsers, async (req, resp) => {
    let user = await Form.find({ user: req.user.id, date: { $lt: currentDayStart } })
    resp.json(user);
  })
} catch (error) {
  resp.send({ success, "error": error });
}
//fetch all the appointment of all the users, which are pending to be confirmed.......................................................................................................................................
try {
  const currentDate = new Date();
  app.get('/pending', async (req, resp) => {
    let user = await Form.find({ date: { $gte: currentDate }, flag: false })
    resp.json(user);
  })
} catch (error) {
  resp.send({ "error": error });
}
//API to change the status of Booking using the PUT Method.......................................................................................................................................................................
app.put('/update/:id', async (req, resp) => {
  try {
    let note = await Form.findById(req.params.id);
    if (!note) {
      return resp.status(404).send('Nothing found');
    }
    note = await Form.findByIdAndUpdate(req.params.id, { flag: true }, { new: true });
    return resp.json({ note });
  } catch (error) {
    return resp.status(500).send({ error: 'Server error' });
  }
});

//Todays appointment for the admin......GET Request...................................................................................................................................
app.get('/todays', async (req, resp) => {
  try {
    const currentDate = new Date();
    const currentDayStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const currentDayEnd = new Date(currentDayStart.getTime() + 24 * 60 * 60 * 1000);

    let user = await Form.find({ date: { $gte: currentDayStart, $lt: currentDayEnd }, flag: true })
    resp.json(user);

  } catch (error) {
    resp.send({ "error": error });
  }
})
//API to add the blog using the  POST Method....................................................................................................................................................
app.post('/blog', async (req, resp) => {
  try {
    const { title, tag, content } = await req.body;
    const newPost = await new Blog({ title, content, tag });
    const savedPost = await newPost.save();
    resp.json(savedPost);
  } catch (error) {
    resp.send({ "error": error });
  }

})
//API to fetch all the notes from the database  using the GET method............................................................................................................................
app.get('/fetchBlogs', async (req, resp) => {
  let user = await Blog.find({})
  resp.json(user);
})
//API to delete the specific note from the database using the DELETE method.....................................................................................................................
app.delete('/deleteNote/:id', async (req, resp) => {
  let note = await Blog.findById(req.params.id);
  if (!note) { return resp.status(404).send("nothing found") }
  note = await Blog.findByIdAndDelete(req.params.id)
  resp.json({ success: "Blog has been deleted" });
})

app.post('/forgot-password', async (req, resp) => {
  const { email } = req.body;
  try {
    const olduser = await User.findOne({ email });
    if (!olduser) {
      return resp.send('User not found');
      const secret = JWT + olduser.password;
      const token = jwt.sign({ email: olduser.email, id: olduser._id }, secret, { expiresIn: '5m' });
      const link = `http://localhost:4000/reset-password/${olduser._id}/${token}`;
      let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'xyz@gmail.com',
            pass: '*************'
        }
    });
     
    let mailDetails = {
        from: 'xyz@gmail.com',
        to: 'abc@gmail.com',
        subject: 'Test mail',
        text: 'Node.js testing mail for GeeksforGeeks'
    };
     
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs');
        } else {
            console.log('Email sent successfully');
        }
    });
      console.log(link);
    }
  } catch (error) {
    return (error)
  }

});
app.get('/reset-password/:id/:token',async(req,resp)=>{
  const {id,token}=req.params;
  console.log(req.params);
  resp.send("Done")
})










app.listen(4000);