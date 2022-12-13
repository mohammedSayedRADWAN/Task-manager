
const mongoose = require('mongoose')

const connectDB = () => {
  return mongoose.connect('mongodb+srv://medo:GXuiZg7kDSz6X2D@cluster0.1px9r18.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },console.log('connected withn db'))
}

module.exports = connectDB 