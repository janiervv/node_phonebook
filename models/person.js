const mongoose = require('mongoose')
require('dotenv').config()
const url = process.env.MONGODB_URI

//const url =
//`process.env.mongodb+srv://fullstack_user:FullStackSalasana123@cluster0.z5ztf.mongodb.net/test?retryWrites=true`

console.log('connecting to', url)
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })


  const personSchema = new mongoose.Schema({
    name: String,
    number: String
  })


  personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

  module.exports = mongoose.model('Person', personSchema)
