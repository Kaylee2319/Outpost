const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const ChatRoomMessages = require('./chatMessages');

const chatroomSchema = new mongoose.Schema(
  {
    chat_id: {
      type: ObjectId,
      required: true,
      trim: true
    },
    user_id: {
      type: ObjectId,
      required: true,
      trim: true,
      unique: true
    },
    chat_name: {
      type: String,
      trim: true
    },
    admin: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true
  }
);

//Create a relationship between Chatrooms to ChatMessage
userSchema.virtual('chatRoomMessages', {
  ref: 'ChatRoomMessages',
  localField: 'chat_id',
  foreignField: 'message_id'
});

const Chatroom = mongoose.model('Chatroom', chatroomSchema);

module.exports = Chatroom;
