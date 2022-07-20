const { Router } = require('express');

const PostControllers = require('../controllers/PostControllers');
//
const middleware = require('../middlewares/middleware');
const handleCreatePost = require('../middlewares/schemas/handleCreatePost');
const handleUpdatePost = require('../middlewares/schemas/handleUpdatePost');
const validateToken = require('../middlewares/validateToken');

const router = Router();
router.get('/search', validateToken, PostControllers.searchPost);

router.post('/', validateToken, middleware(handleCreatePost), PostControllers.create);

router.get('/', validateToken, PostControllers.getAll);

router.get('/:id', validateToken, PostControllers.getById);

router.put('/:id', validateToken, middleware(handleUpdatePost), PostControllers.updatePost);

router.delete('/:id', validateToken, PostControllers.delete);

module.exports = router;