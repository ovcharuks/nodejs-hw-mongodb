import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      requred: true,
    },
    email: {
      type: String,
      requred: false,
    },
    isFavourite: {
      type: Boolean,
      requred: false,
      default: false,
    },
    contactType: {
      type: String,
      requared: true,
      enum: ['work', 'home', 'personal'],
      derault: 'personal',
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      requared: true,
    },
  },
  {
    timestamps: true,
    timeseries: true,
    versionKey: false,
  },
);

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
