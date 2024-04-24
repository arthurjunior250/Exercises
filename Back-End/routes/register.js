const router = require('express').Router();
const User = require('../models/register.model');

router.route('/add').post((req, res) => {
  const { username, email, password } = req.body;

  // Check if username or email already exists
  User.findOne({ $or: [{ username }, { email }] })
    .then(existingUser => {
      if (existingUser) {
        // If username or email already exists, return an error
        return res.status(400).json({ message: 'Username or email already exists' });
      } else {
        // Create a new user
        const newUser = new User({ username, email, password });
        // Save the new user to the database
        newUser.save()
          .then(() => res.json('User registered successfully'))
          .catch(err => res.status(400).json('Error: ' + err));
      }
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
