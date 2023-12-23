// app.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('../backend/routes/userRoutes');
const db = require('./db');
const dietRoutes = require('./routes/dietRoutes');
const dietitianRoutes = require('./routes/dietitianRoutes');
const suggestedDietRoutes = require('./routes/suggestedDietRoutes');




const app = express();

app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/diet', dietRoutes);
app.use('/dietitian', dietitianRoutes);
app.use('/suggested-diet', suggestedDietRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
