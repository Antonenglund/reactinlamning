const mongodb = require('mongoose');

const productSchema = mongodb.Schema({

    _id:                    mongodb.Schema.Types.ObjectId,
    productName:            { type: String, require: true, unique: true },
    short:                  { type: String, require: true},
    description:            { type: String, require: true },
    price:                  { type: String, require: true },
    status:                 { type: Boolean, require: true },
    image:                  { type: String, require: true},
    

    created:                { type: Date, default: Date.now },
    modified:               { type: Date, default: Date.now }

})

module.exports = mongodb.model("Product", productSchema)