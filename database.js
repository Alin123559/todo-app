const mongoose = require('mongoose');
main().then((data) => console.log("connected to mongodb")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://alintreesa123:AvU8cV7K7rUcqjVO@cluster0.n3yx6mf.mongodb.net/')
}
module.exports = mongoose;