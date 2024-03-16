import mongoose from 'mongoose'
const productSchema = new mongoose.Schema(
    {
        image: {
            type: String,
        },
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        color: {
            type: String,
        },
        price: {
            type: Number,
        }
       
    })
const Products = mongoose.model('products', productSchema)
export default Products