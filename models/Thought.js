const { Schema, model, Types } = require('mongoose');
const timestamp = require('time-stamp');

// create reaction schema
const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => timestamp(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// create Thought schema
const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => timestamp(createdAtVal),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// create a virtual for reactionCount that retrieves length of the thoughts reactions array
ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// create Thought Model
const Thought = model('Thought', ThoughtSchema);

// export Thought model
module.exports = Thought;
