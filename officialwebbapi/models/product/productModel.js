

const mongodb = require('mongoose');
const Product = require('./productSchema');

exports.addProducts = (req, res) => {
   
    Product.find({ productName: req.body.productName })
    .then(exists => {
        if (exists > 0) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Product with the same name already exists.'
                
            })
            
        } else {
            const product = new Product (
                {
                    _id:                    new mongodb.Types.ObjectId,
                    productName:            req.body.productName,
                    short:                  req.body.short,
                    description:            req.body.description,
                    price:                  req.body.price,
                    image:                  req.body.image,
                    inStock:                req.body.inStock
                }
            )

            product.save()
            .then(() => {
                res.status(201).json({
                    statusCode: 201,
                    status: true,
                    message: 'Product was successfully added.'
                })
            })
            .catch(error => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Unable to create product. Please contact the system administrator.'
                }) 
            })
        }

            
    
    })
}

exports.getProduct = (req, res) => {
    Product.find()
    .then(data =>{
        res.status(200).json(data)
    })
    

    
}
    exports.getProductByOne = (req, res) => {
    Product.findOne({_id: req.params.id})
    .then(data =>{
        res.status(200).json(data)
    })
    
    
}

