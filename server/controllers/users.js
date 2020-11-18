const User = require('../db/models/user');
const cloudinary = require('cloudinary').v2,
  { sendWelcomeEmail, sendCancellationEmail } = require('../emails/index');

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
  } catch (e) {
    res.status(400).json({ error: e.toString() });
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

// Password Change Page passwordRedirect

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
    'birthday',
    'gamer_tags',
    'avatar',
    'first_name',
    'last_name',
    'service_branch',
    'location'
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

// Update User Avatar uploadAvatar -------------------------------------------- +++NEED CLOUDINARY+++
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
