const mongoose = require('mongoose')
const shortId = require('shortid')

// Creates the schema of the database, for display on the page
const shortUrlSchema = new mongoose.Schema ({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
})

// Links the database to the above model 
module.exports = mongoose.model('ShortUrl', shortUrlSchema)