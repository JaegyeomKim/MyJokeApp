const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Joke = require('./models/jokeSchema')
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow the specified HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow the specified headers
    next();
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://KayKim:941215@cluster0.twuvhrn.mongodb.net/Portfolio', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Failed to connect to MongoDB', error);
});



// GET request handler for /api/users endpoint
app.get('/api/jokes', (req, res) => {
    Joke.find()
      .then(jokes => {
        res.json(jokes); // Send the jokes as JSON response
      })
      .catch(error => {
        console.error('Failed to fetch jokes', error);
        res.status(500).json({ error: 'Failed to fetch jokes' });
      });
});
  
  // POST request handler for /api/users endpoint
  app.post('/api/jokes', (req, res) => {
    // Assuming you have a User model defined with Mongoose
    const newJokes = new Joke({
        _id: new mongoose.Types.ObjectId(),
        nickname: req.body.nickname,
        content: req.body.content,
        ans: req.body.ans,
        isFlipped: false,
        likes: 0
    });
  
    newJokes.save()
      .then(savedJokes => {
        res.json(savedJokes); // Send the saved user as JSON response
      })
      .catch(error => {
        console.error('Failed to save user', error);
        res.status(500).json({ error: 'Failed to save user' });
      });
  });

// Assuming you have already set up your Express app and routes...

// POST /api/jokes/:id/like
app.post('/api/jokes/:id/like', (req, res) => {
    const jokeId = req.params.id;
  
    // Here, you would typically update the likes count for the joke with the specified ID
    // in your database. You can use your preferred database and ORM/library for this.
    // For simplicity, let's assume you have a jokes collection/table in MongoDB and are using Mongoose.
  
    Joke.findById(jokeId)
      .then((joke) => {
        if (!joke) {
          return res.status(404).json({ error: 'Joke not found' });
        }

        // Increment the likes count by 1
        joke.likes += 1;
  
        // Save the updated joke
        return joke.save();
      })
      .then((updatedJoke) => {
        res.json({ likes: updatedJoke.likes });
      })
      .catch((error) => {
        console.error('Failed to update like:', error);
        res.status(500).json({ error: 'Failed to update like' });
      });
  });
  
const port = 3001; // Choose a port number
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
