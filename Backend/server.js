const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/bookdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const bookRoutes = require('./routes/bookRoutes');
app.use('/api/books', bookRoutes);
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});


app.listen(5000, () => console.log('Server running on http://localhost:5000'));
