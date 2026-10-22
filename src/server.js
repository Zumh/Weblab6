require('dotenv').config(); 
// express 
const express = require('express'); 

// helmet and rate limit
const helmet = require('helmet'); 
const cors = require('cors'); 
const rateLimit = require('express-rate-limit'); 
const compression = require('compression'); 

// data base
const sequelize = require('./config/database'); 
require('./models/Task'); 


// rules set here
const taskRoutes = require('./routes/tasks'); 
 


const app = express(); 
app.use(express.json()); 
app.use((req, res, next) => { 
  console.log(`${req.method} ${req.path}`); 
  next(); 
}); 

// helmets and rate limit are use here
app.use(helmet()); 
app.use(compression()); 
app.use(cors({ origin: 'http://localhost:5173', credentials: true })); 
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100, standardHeaders: true }));

// Routing 
app.use('/api/tasks', taskRoutes); 
 
app.use((req, res) => res.status(404).json({ error: 'Route not found' })); 

app.use((err, req, res, next) => { 
  console.error(err); 
  res.status(500).json({ error: 'Unexpected server error' }); 
}); 


// sequelize use here 
sequelize.sync().then(() => { 
  app.listen(process.env.PORT || 3000, () => console.log('API running')); 
});

app.listen(process.env.PORT || 3000, () => console.log('API running')); 
