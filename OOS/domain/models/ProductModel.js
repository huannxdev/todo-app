const mongooes = require('mongoose');
const productSchema = new mongooes.Schema({
    name: {
        type: String,
        required: true
    },
    code: String,
    updatedDate: Date,
    createdDate: Date,
    createdBy: String,
    modifiedDate: Date,
    modifiedBy: String,
    description: String,
    idCategory: String,
    status: Number,
    details:  String,
    discount: Number,
    prince: Number,
    image: String
});

productSchema.set('toObject', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id
    }
})
const product = mongooes.model('Product', productSchema);

module.exports = product;