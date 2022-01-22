// import router
const router = require('express').Router();
// import controllers
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/user-controller');

// GET all users and POST create a user
router.route('/').get(getAllUsers).post(createUser);

// GET single user, PUT update user, and DELETE user by :id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// POST and DELETE friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);
module.exports = router;
