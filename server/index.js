const express = require('express');
const connectDB = require('./config/db');

//create server
const app = express();


app.get('/', (req, res) => {
  res.send('Hola mundo')
})

// connect to db
connectDB();

// enable express.json to read data from request
app.use(express.json({extended: true}));

// port app
const PORT = process.env.PORT || 4000;


//import routes
app.use('/api/users', require('./routes/users'));


// run app
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
