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
router.post('/profile/avatar', uploadAvatar);
router.put('/password', updatePassword);
router.post('/logout', logoutUser);
router.delete('/', deleteUser);

// Send DM - post and get???

// Send Chat in Chatroom

module.exports = router;
