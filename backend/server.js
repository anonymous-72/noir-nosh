const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb+srv://bordeniucfrontdev:Palma1411@mycluster.g66r5yq.mongodb.net/noir-nosh', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to MongoDB')
})

const typeDishSchema = new mongoose.Schema({
  type: String
})

const menuSchema = new mongoose.Schema({
  name: String,
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Type_dish'
  },
  description: String,
  price: Number,
  image: String
})

const reservationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String,
  date: Date,
  time: String,
  numberOfSeats: String,
  message: String
})

const Type_dish = mongoose.model('Type_dish', typeDishSchema)
const Menu = mongoose.model('Menu', menuSchema)
const Reservation = mongoose.model('Reservation', reservationSchema)

app.get('/menus', async (req, res) => {
  const type = req.query.type
  if (type) {
    const typeDish = await Type_dish.findOne({ type: type })
    if (typeDish) {
      const items = await Menu.find({ type: typeDish._id }).populate('type')
      res.json(items)
    } else {
      res.json([])
    }
  } else {
    const items = await Menu.find().populate('type')
    res.json(items)
  }
})

app.post('/reservations', async (req, res) => {
  const { firstName, lastName, phoneNumber, email, date, time, numberOfSeats, message } = req.body

  const reservation = new Reservation({
    firstName,
    lastName,
    phoneNumber,
    email,
    date,
    time,
    numberOfSeats,
    message
  })

  try {
    const newReservation = await reservation.save()
    res.status(201).json(newReservation)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
