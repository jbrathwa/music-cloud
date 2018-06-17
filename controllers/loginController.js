var User=require('../models/User');

exports.login=function(req,res){
    res.render('login');
};

exports.authenticate=function(req,res){
  var usr=req.body.username;
  var pass=req.body.password;
  User.findOne({username:usr,password:pass},'username').exec(function(err,user){
      if(err){
          console.log("There is some error: "+err);
      }
      console.log(user.username);
      //req.session.user=user.username;
  });
  res.redirect('http://localhost:3000/');  
};

exports.signup=function(req,res){
    res.render('signup');
};

exports.newuser=function(req,res){
  var usr=req.body.username;
  var pass=req.body.password;  
  var user=new User({username:usr,password:pass});
  console.log(usr);
  user.save((err)=>{
      if(err) throw err;
      console.log("User saved");
  });
  res.redirect('http://localhost:3000/login');
};