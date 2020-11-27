const User = require('../db/models/user');
const cloudinary = require('cloudinary').v2,
  {
    sendWelcomeEmail,
    sendCancellationEmail,
    forgotPasswordEmail
  } = require('../emails/index');
const jwt = require('jsonwebtoken');
// ==  OPEN ROUTES  ==

// Need to generate a user_id...

// Create a User createuser
exports.createUser = async (req, res) => {
  const { user_name, email, password } = req.body;
  try {
    const user = new User({
      user_name,
      email,
      password
    });
    sendWelcomeEmail(user.email, user.user_name);
    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login a User loginUser
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// Password Change Request requestPasswordReset
exports.requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');
    const token = jwt.sign(
      { _id: user._id.toString(), name: user.user_name },
      process.env.JWT_SECRET,
      { expiresIn: '10m' }
    );
    forgotPasswordEmail(email, token);
    res.json({ message: 'reset password email sent!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Password Change Page passwordRedirect
exports.passwordRedirect = async (req, res) => {
  const { token } = req.params;
  try {
    jwt.verify(token, process.env.JWT_SECRET, function (err) {
      if (error) throw new Error(error.message);
    });
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 600000,
      sameSite: 'Strict'
    });
    res.redirect(process.env.URL + '/update-password');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ==  SECURE ROUTES  ==

// User Profile Page getUserProfile
exports.getUserProfile = async (req, res) => {
  res.json(req.user);
};

// Update User Info updateUserProfile
exports.updateUserProfile = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'user_name',
    'email',
    'password',
    'avatar',
    'first_name',
    'last_name',
    'service_branch',
    'xbox',
    'psn',
    'nes',
    'pc',
    'other'
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'Invalid updates' });
  try {
    //Loop through each update, and change the value for the current user to the value coming from the body
    updates.forEach((update) => (req.user[update] = req.body[update]));
    //save the updates in the db
    await req.user.save();
    //send the updated user as a response
    res.json(req.user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update User Avatar uploadAvatar
exports.uploadAvatar = async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.avatar.tempFilePath
    );
    req.user.avatar = response.secure_url;
    await req.user.save();
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Password updatePassword
exports.updatePassword = async (req, res) => {
  try {
    req.user.password = req.body.password;
    await req.user.save();
    res.clearCookie('jwt');
    res.status(200).json({ message: 'password updated successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Logout User logoutUser
exports.logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.cookies.jwt;
    });
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'logged out!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete User deleteUser
exports.deleteUser = async (req, res) => {
  try {
    await req.user.remove();
    sendCancellationEmail(req.user.email, req.user.user_name);
    res.clearCookie('jwt');
    res.json({ message: 'user deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Send DM                                                    ---------------- Secure Controller?

// Send Chat in Chatroom                                       ---------------- Secure Controller?
