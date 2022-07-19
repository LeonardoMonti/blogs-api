const { Router } = require('express');

const CategoryControllers = require('../controllers/CategoryControllers');
//
const middleware = require('../middlewares/middleware');
const handleCreateCategory = require('../middlewares/schemas/handleCreateCategory');
const validateToken = require('../middlewares/validateToken');

const router = Router();

router.post('/', middleware(handleCreateCategory), validateToken, CategoryControllers.create);

router.get('/', validateToken, CategoryControllers.getAll);

module.exports = router;