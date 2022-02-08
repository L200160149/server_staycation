const mongoose = require('mongoose');
// relasi
const { ObjectId } = mongoose.Schema;

const activitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    isPopular: {
        type: Boolean,
    },
    itemId: {
        type: ObjectId,
        ref: Item
    }
  });

  module.exports = mongoose.model('Activity', activitySchema)