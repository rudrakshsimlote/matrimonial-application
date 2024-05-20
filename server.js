// server.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./database');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.send('Matrimonial Application Backend');
});

// Sync the database
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => {
  console.error('Unable to sync the database:', err);
});
