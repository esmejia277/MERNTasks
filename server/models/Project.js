const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'

  },
  dateCreation: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Project', ProjectSchema);