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
app.use(express.static(__dirname + '/client/build'));


/***********************************************************************
* Routes
***********************************************************************/
app.get('/', (req, res) => {
  res.sendFile('index.html');
});


app.get('/api', (req, res) => {

  // for the API check the documentation:
  //  https://pro.coinmarketcap.com/api/v1#section/Quick-Start-Guide
  const rp = require('request-promise');
  const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      start: 1,
      limit: 100,
      convert: 'USD'
    },
    headers: {
      'X-CMC_PRO_API_KEY': process.env.API_KEY
    },
    json: true,
    gzip: true
  };

  rp(requestOptions)
  .then(response => {
    res.json(response);
  })
  .catch((err) => {
    res.send(err.message);
  });
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
