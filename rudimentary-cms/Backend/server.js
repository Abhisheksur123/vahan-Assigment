// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models'); // Sequelize configuration

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// Routes for CRUD operations
app.use('/api/entities', require('./routes/entities'));

// Start server
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connection established');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
