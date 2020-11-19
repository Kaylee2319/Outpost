const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const directMessagesSchema = new mongoose.Schema(
  {
    dm_id: {
      type: ObjectId,
      required: true,
      trim: true
    },
    user_name_from: {
      type: ObjectId,
      required: true,
      trim: true, //needed?
      unique: true
    },
    user_name_to: {
      type: ObjectId,
      required: true,
      trim: true, //needed?
      unique: true
    },
    message_text: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const DirectMessages = mongoose.model('DirectMessages', directMessagesSchema);

module.exports = DirectMessages;
