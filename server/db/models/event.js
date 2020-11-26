const mongoose = require('mongoose');
const User = require('./user');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

eventSchema.virtual('user', {
  ref: 'User',
  localField: 'createdBy',
  foreignField: '_id'
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
