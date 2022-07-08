var express = require('express');
var router = express.Router();
const authController = require('../src/controllers/auth.controller');


// /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'KHẢO SÁT TRỰC TUYẾN' });
});

/* dangnhap */
router.get('/dangnhap', function(req, res, next) {
  res.render('dangnhap', { title: 'Đăng nhập'});
});

/* dangky */
router.get('/dangky', function(req, res, next) {
  res.render('dangky', { title: 'Đăng ký' });
});

/* quenmk */
router.get('/quenmk', function(req, res, next) {
  res.render('quenmk', { title: 'Quên mật khẩu' });
});

/* traloi */
router.get('/traloi', function(req, res, next) {
  res.render('traloi', { title: 'Trả lời khảo sát' });
});
router.post('/create/register', authController.createRegiter);

router.post('/login', authController.login);
router.get('/register', authController.register);

module.exports = router;
