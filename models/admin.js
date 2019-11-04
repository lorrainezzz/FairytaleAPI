let mongoose = require('mongoose');

let AdminSchema = new mongoose.Schema({
        aname: String,
        apassword: String
    },
    { collection: 'admin' });

module.exports = mongoose.model('Admin', AdminSchema);