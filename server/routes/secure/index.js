const router = require('express').Router(),
  {
    getUserProfile,
    updateUserProfile,
    uploadAvatar,
    updatePassword,
    logoutUser,
    deleteUser
  } = require('../../controllers/users');

router.get('/profile', getUserProfile);
router.patch('/profile', updateUserProfile);
router.post('/avatar', uploadAvatar); // maybe move to /profile/avatar
router.put('/password', updatePassword);
router.post('/logout', logoutUser);
router.delete('/', deleteUser);

// Send DM - post and get???

// Send Chat in Chatroom

module.exports = router;
