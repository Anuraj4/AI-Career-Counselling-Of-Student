const express = require('express');
const connectDB = require('../config/db');

const app = express();

// Connect to Database
connectDB();

// Init Middleware
app.use(express.json());

app.get('/', (req, res) => res.send({ message: 'Welcome to AI-Powered Career Counseling Platform!' }));

// Define Routes
app.use('/api/users', require('../routes/users'));
app.use('/api/auth', require('../routes/auth'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
