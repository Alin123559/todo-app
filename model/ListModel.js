const mongoose = require('mongoose');
const modelSchema = new mongoose.Schema({
text:{
    type:String,
    required:true
}
    

})

module.exports = mongoose.model('List',modelSchema)