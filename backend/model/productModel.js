import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: false },
    countInStock: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;