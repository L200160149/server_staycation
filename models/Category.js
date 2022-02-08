const mongoose = require('mongoose');
// untuk relasi
const { ObjectId } = mongoose.Schema;

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // untuk relasi
    itemId: [{
        type: ObjectId,
        ref: 'Item'
    }]
  });

  module.exports = mongoose.model('Category', categorySchema)