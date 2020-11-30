const router = require('express').Router(),
  {
    getUserProfile,
    getUserByID,
    updateUserProfile,
    uploadAvatar,
    updatePassword,
    logoutUser,
    deleteUser
  } = require('../../controllers/users');

router.get('/profile', getUserProfile);
router.get('/allusers/:id', getUserByID);
router.patch('/profile', updateUserProfile);
router.post('/avatar', uploadAvatar);
router.put('/password', updatePassword);
router.post('/logout', logoutUser);
router.delete('/', deleteUser);

module.exports = router;
