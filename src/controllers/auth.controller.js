const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService } = require('../services');
const account = require('../models/account') 
class authentication{
  login(){

  }
  register(req,res,next){
    res.render('dangnhap')
  }
  createRegiter(req,res,next){
    console.log(req.body)
    // createAccount= new account()
  }
}

module.exports = new authentication
