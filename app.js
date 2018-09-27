/***********************************************************************
* Configuration
***********************************************************************/
// .env file to connect to mongoose
require('dotenv').config()


// App dependencies
const PORT      = Number(process.env.PORT || 3000);
const express   = require('express');
const app       = express();


// middleware for serving static files
app.use(express.static(__dirname + '/public'));


/***********************************************************************
* Routes
***********************************************************************/
app.get('/api', (req, res) => {

  // for the API check the documentation:
  //  https://pro.coinmarketcap.com/api/v1#section/Quick-Start-Guide
  const rp = require('request-promise');

  res.send('test');
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
