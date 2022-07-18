const { Router } = require('express');

const UserControllers = require('../controllers/UserControllers');
//
const middleware = require('../middlewares/middleware');
const handleCreate = require('../middlewares/schemas/handleCreate');

const router = Router();

router.post('/', middleware(handleCreate), UserControllers.create);

module.exports = router;