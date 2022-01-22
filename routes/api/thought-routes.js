const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thought-controller');

// create routes for GET all thoughts and POST new thought
router.route('/').get(getAllThoughts).post(createThought);

// create routes for GET thought by id, PUT update thought by id, and DELETE thought by id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
