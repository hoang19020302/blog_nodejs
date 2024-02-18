const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, required: true, default: '' },
    description: { type: String, maxLength: 600, default: '' },
    image: { type: String, default: '' },
    videoId: { type: String, required: true, default: '' },
    level: { type: String, default: '' },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);
