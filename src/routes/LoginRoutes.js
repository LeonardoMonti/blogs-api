const { Router } = require('express');

const LoginControllers = require('../controllers/LoginControllers');
//
const middleware = require('../middlewares/middleware');
const handleLogin = require('../middlewares/schemas/handleLogin');

const router = Router();

router.post('/', middleware(handleLogin), LoginControllers.login);

module.exports = router;