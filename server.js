//necessary requires
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const noteRoutes = require('./routes/noteRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
//middleware implementation 
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));
//use of imported routers
app.use('/', htmlRoutes);
app.use('/api', noteRoutes);
//starts server listening
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
});