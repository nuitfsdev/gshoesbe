import Products from "../models/product.js";
export const getAllProducts = async (req, res) => {
    try {
        const listProducts = await Products.find({});
        res.send(listProducts);
    } catch (error) {
        res.status(500).send(error)
    }
}

export const getProductById = async (req, res) => {
    try {
        const products = await Products.findOne({ _id: req.params.id })
        if (!products) {
            return res.status(404).send("Not found")
        }
        res.send(products)
    } catch (error) {
        res.status(500).send(error)
    }
}
export const addProduct = async (req, res) => {
    const products = new Products(req.body)
    try {
        await products.save()
        res.status(201).send(products)
    } catch (error) {
        res.status(400).send(error)
    }
}
export const updateProduct = async (req, res) => {
    const updates = Object.keys(req.body)
    try {
        console.log(req.params.id);
        const products = await Products.findOne({ _id: req.params.id })
        if (!products) {
            return res.status(404).send('Not found')
        }
        updates.forEach(update => {
            console.log(req.body[update]);
            products[update] = req.body[update]
            console.log(products[update]);

        })
        await products.save()
        res.send(products)
    } catch (error) {
        res.status(500).send(error)
    }

}
export const deleteProduct = async (req, res) => {
    try {
        const products = await Products.findByIdAndDelete({ _id: req.params.id })
        if (!products) {
            return res.status(404).send('Not found')
        }
        await res.send(products)
    } catch (error) {
        res.status(500).send(error)
    }
}