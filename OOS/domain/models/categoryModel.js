const mongooes = require('mongoose');
const categorySchema = new mongooes.Schema({
    name: {
        type: String,
        required: [true, 'a category must have a name'],
        trim: true
    },
    description: String,
    status: Number,
    thumbnail: {
        type: String,
        required: [true, 'a category must have a thumbnail']
    }
});

categorySchema.set('toObject', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id
    }
})

const category = mongooes.model('category',categorySchema);
module.exports = category