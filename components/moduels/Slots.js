import { Schema, model } from 'mongoose';

const slotSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    default: false,
  },
});

// Add a compound unique index for date and time
slotSchema.index({ date: 1, time: 1 }, { unique: true });

export default model('Slot', slotSchema);
