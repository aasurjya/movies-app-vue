import mongoose from 'mongoose'

// Define the schema for the collection
const userSchema = new mongoose.Schema({
  uName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
  }
})

// Define the model based on the schema
const UserModel = mongoose.model('User', userSchema)

// MongoDB Atlas connection URL
const dbURL =
  'mongodb+srv://aasurjya:aasurjya@tixspot.soffs9p.mongodb.net/?retryWrites=true&w=majority'

// Connect to MongoDB Atlas
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB Atlas')
    saveNewUser() // Call the function to save a new user after the connection is established
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error)
  })

// Function to create and save a new user
function saveNewUser() {
  const newUser = new UserModel({
    uName: 'john_doe',
    email: 'john@example.com',
    pass: 'secret'
  })

  newUser
    .save()
    .then((savedUser) => {
      console.log('User saved:', savedUser)
    })
    .catch((error) => {
      console.error('Error saving user:', error)
    })
}

export { UserModel, saveNewUser }
