import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this product.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for this product.'],
  },
  category: {
    type: String,
    required: [true, 'Please specify the product category.'],
  },
  images: {
    type: [String], // Array of image URLs
  },
  pdfs: {
    type: [String], // Array of PDF URLs
  },
}, {
  timestamps: true,
});

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
