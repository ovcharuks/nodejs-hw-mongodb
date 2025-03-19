import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
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
    createdAt: {
      type: String,
      requared: false,
    },
    updatedAt: {
      type: String,
      requared: false,
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
