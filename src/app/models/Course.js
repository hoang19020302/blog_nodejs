const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    _id: { type: Number, },
    name: { type: String, required: true, default: '' },
    description: { type: String, maxLength: 600, default: '' },
    image: { type: String, default: '' },
    videoId: { type: String, required: true, default: '' },
    level: { type: String, default: '' },
    slug: { type: String, slug: 'name', unique: true },
}, {
    _id: false,
    timestamps: true,
});

// Custom query helper
CourseSchema.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({ [req.query.column]: isValidType ? req.query.type : 'asc' });
    }
    return this;
}

// Add plugin
mongoose.plugin(slug);
CourseSchema.plugin(AutoIncrement, { start_seq: 0 });
CourseSchema.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', CourseSchema);
