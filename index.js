const express = require('express')
const app = express()
const morgan = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const Person = require('./models/person')

require('dotenv').config()

app.use(express.json()) 
app.use(morgan('tiny'))
app.use(cors())
app.use(express.static('build'))

app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(' ')
}))


  app.get('/', (req, res) => {
    res.json(persons)
  })



  app.get('/api/info', (request, response) => {
    Person.countDocuments().then(result => {
      response.send("Phonebook has " + result + " people.")
  })
})



  app.get('/api/persons', (req, res) => {
    Person.find({}).then(person => {
      res.json(person)
    })
  })



  app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id).then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))

  })



  app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
      .then(result => {
        response.status(204).end()
      })
      .catch(error => next(error))
  })


  app.post('/api/persons', (request, response, next) => {
    const body = request.body
  
    if (!body.name) {
      return response.status(400).json({ 
        error: 'Name missing' 
      })
    }

    else if (!body.number) {
      return response.status(400).json({ 
        error: 'Phone missing' 
      })
    }
  
    const person = new Person({
      name: body.name,
      number: body.number
    })

    console.log(person)
  
    person.save().then(savedPerson => { 
      response.json(savedPerson)
    })

    .catch(error => next(error))
  })


  app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body
  
    const person = {
      name: body.name,
      number: body.number
    }
  


    Person.findByIdAndUpdate(request.params.id, person, { new: true }, next)
      .then(updatedPerson => {
        response.json(updatedPerson)
      })
      .catch(error => next(error))
    })
    



    const unknownEndpoint = (request, response) => {
      response.status(404).send({ error: "Unknown Endpoint" });
    };
    app.use(unknownEndpoint);


    const handleError = (error, request, response, next) => {
      console.error(error.message);

      if (error.name === "CastError") {
        return response.status(400).send({ error: "Malformatted ID" });
      } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
      }
      next(error);
    };
    app.use(handleError);


    const no_of_people = () => {
      return  Person.length
    }


  const PORT = process.env.PORT
  app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})









