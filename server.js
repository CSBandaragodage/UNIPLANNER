const express = require('express');
const mongoose = require('mongoose');  
const cors = require('cors');
const UsersModel = require('./models/Users');  // Correct model import

const app = express();

// Middleware
app.use(express.json());
app.use(cors());


// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/UniPlanner", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

//start of login 

// Define the login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  console.log('Received login request:', { username, password }); // Log received data

  try {
    // Find user by username in the database
    const user = await UsersModel.findOne({ username }); // Use UsersModel correctly

    // If no user is found with the provided username
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare the provided password with the stored password (in plain text)
    if (user.password !== password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // If login is successful, return user information (excluding password)
    res.status(200).json({
      message: 'Login successful',
      userType: user.userType,  // Send back user type (admin, student, etc.)
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// End of the login 



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
