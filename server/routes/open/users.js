const router = require('express').Router(),
  {
    createUser,
    loginUser,
    requestPasswordReset,
    passwordRedirect,
    getAllUsers,
    getUserByID
  } = require('../../controllers/users');

router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/password', requestPasswordReset);
router.get('/password/:token', passwordRedirect);
router.get('/allusers', getAllUsers);
router.get('/allusers/:id', getUserByID);

module.exports = router;
