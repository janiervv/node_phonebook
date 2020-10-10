const express = require('express')
const app = express()
const morgan = require('morgan');
const cors = require('cors')
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

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
      },
      {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2
      },
      {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3
      },
      {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4
      },
      {
        name: "Jani Ervasti",
        "number": "045-8756666",
        id: 5
      }
  ]


  app.get('/', (req, res) => {
    res.json(persons)
  })



  app.get('/api/info', (req, res) => {
    res.send("Phonebook has " + no_of_people() + " people.")
  })



  app.get('/api/persons', (req, res) => {
    res.json(persons)
  })


  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        response.json(person)
      } else {
        console.log("tulee elseen")
        response.status(404).end()
        }

  })


  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(persons => persons.id !== id)
    response.status(204).end()
  })



  app.post('/api/persons', (request, response) => {
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

    else if (persons.find(person => person.name === body.name)) {
      return response.status(400).json({ 
        error: 'Name must be unique' 
      })
    }

  
    const person = {
      name: body.name,
      number: body.number,
      id: Math.floor(Math.random() * Math.floor(1000)),
    }
  
    persons = persons.concat(person)
    response.json(person)
  })



  const no_of_people = () => {
    const nro = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return nro
  }


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
