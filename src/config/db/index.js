const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
async function connect() {
    try {
        await mongoose.connect('mongodb://172.23.176.1:27017/f8_education_dev', {
          
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };
