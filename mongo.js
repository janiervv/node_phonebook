const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack_user:${password}@cluster0.z5ztf.mongodb.net/test?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv[3] !== undefined && process.argv[4] !== undefined) {

  const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
  })


  person.save().then(response => {
    console.log('Added ' + process.argv[3] + ', number ' + process.argv[4] + ' to phonebook')
    mongoose.connection.close()
  })
}
else {

  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })
}