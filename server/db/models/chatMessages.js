const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const chatMessagesSchema = new mongoose.Schema(
  {
    message_id: {
      type: ObjectId,
      required: true,
      trim: true
    },
    chat_id: {
      type: ObjectId,
      required: true,
      trim: true,
      unique: true
    },
    user_id: {
      type: ObjectId,
      required: true,
      trim: true,
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

const ChatMessages = mongoose.model('ChatMessages', chatMessagesSchema);

module.exports = ChatMessages;
