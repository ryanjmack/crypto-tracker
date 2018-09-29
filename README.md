# Cryptocurrency Market Capitalization Tracker

This is a full stack project that loosely clones [CoinMarketCap](https://coinmarketcap.com/)'s front page, which displays the top 100 cryptocurrencies by market cap. I used Node.js on the server to fetch data, and React.js to request the data from the server and dynamically create a table. The site was designed responsive/mobile-friendly without a library or framework; just CSS (well Sass, but you get the idea!).

It utilizes CoinMarketCap's [API](https://pro.coinmarketcap.com/) to get real time data about the top 100 cryptocurrencies. The API must be called by a server, not a client due to CORS configuration, hence why it isn't just a front end project.


## Getting Started

Check out the [live demo](https://ryanmack-crypto-tracker.herokuapp.com/)!

## Built With

* Node.js
* React.js
* Express
* Sass
* create-react-app


## Final Thoughts

I had a lot of fun building this project and was able to get it up and running pretty quickly. I can't wait to build my next project!
