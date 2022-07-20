const { Router } = require('express');

const PostControllers = require('../controllers/PostControllers');
//
const middleware = require('../middlewares/middleware');
const handleCreatePost = require('../middlewares/schemas/handleCreatePost');
const validateToken = require('../middlewares/validateToken');

const router = Router();

router.post('/', validateToken, middleware(handleCreatePost), PostControllers.create);

router.get('/', validateToken, PostControllers.getAll);

router.get('/:id', validateToken, PostControllers.getById);

module.exports = router;