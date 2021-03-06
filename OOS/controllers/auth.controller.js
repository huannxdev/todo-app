const User = require("../domain/models/user/user.model");
const Role = require("../domain/models/user/role.model");

var jwt = require("jsonwebtoken");
var bcryptjs = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: bcryptjs.hashSync(req.body.password, 8)
  });
  user.save((err, user) => {
    if (err) {
      res.status(500).send({message: err});
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: {$in: req.body.roles}
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({message: err});
            return;
          }

          user.roles = roles.map(role => role.id);
          user.save(err => {
            if (err) {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }

              res.send({ message: "User was registered successfully!" });
            }
          });
        }
      );
    } else {
      Role.findOne({name: "user"}, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        user.roles = [role.id];
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          res.send({ message: "User was registered successfully!" });
        });
      });
    }
  });
}

exports.signin = (req, res) => {
  User.findOne({
    userName: req.body.userName
  }).populate("roles", "-__v")
  .exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    var passwordIsValid = bcryptjs.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }
    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: 86400 // 24 hours
    });

    const authorities = [];

    for (let i = 0; i < user.roles.length; i++) {
      authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
    }
    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      roles: authorities,
      accessToken: token
    });
  })
}