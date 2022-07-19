const { Router } = require('express');

const UserControllers = require('../controllers/UserControllers');
//
const middleware = require('../middlewares/middleware');
const handleCreate = require('../middlewares/schemas/handleCreate');
const validateToken = require('../middlewares/validateToken');

const router = Router();

router.post('/', middleware(handleCreate), UserControllers.create);

router.get('/', validateToken, UserControllers.getAll);

module.exports = router;