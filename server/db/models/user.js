const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    user_id: {
      type: ObjectId,
      required: true,
      unique: true
    },
    user_name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid');
        }
      }
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error('Password cannot be password.');
        }
        if (value.length < 6) {
          throw new Error('Password must be at least 6 characters.');
        }
      }
    },
    birthday: {
      type: Date
    },
    gamer_tags: [
      {
        xbox: {
          type: String
        },
        PSN: {
          type: String
        },
        NES: {
          type: String
        },
        PC: {
          type: String
        },
        Other: {
          type: String
        }
      }
    ],
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ],
    avatar: {
      type: String
    },
    first_name: {
      type: String
    },
    last_name: {
      type: String
    },
    service_branch: {
      type: String
    },
    location: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

//Create a relationship between User to DirectMessage
userSchema.virtual('directMessages', {
  ref: 'DirectMessage',
  localField: 'user_id',
  foreignField: 'dm_id'
});

//Create a relationship between User to ChatMessage
userSchema.virtual('chatMessages', {
  ref: 'ChatMessage',
  localField: 'user_id',
  foreignField: 'message_id'
});

//Create a relationship between User to Chatrooms
userSchema.virtual('chatrooms', {
  ref: 'Chatrooms',
  localField: 'chat_id',
  foreignField: 'message_id'
});

const User = mongoose.model('User', userSchema);

module.exports = User;
