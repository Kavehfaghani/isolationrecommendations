const express = require('express')
const cool = require('cool-ascii-faces')
const path = require('path')
const PORT = process.env.PORT || 5000

// Define new Routes 
var homeRouter = require('./routes/home')
var landingRouter = require('./routes/landing')
var recommendationsRouter = require('./routes/recommendations')
var resultsRouter = require('./routes/results')


/*
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
*/

var app = express();

// view engine setup
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use('/', homeRouter)
app.use('/', landingRouter)
app.use('/', recommendationsRouter)
app.use('/', resultsRouter)
app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM test_table');
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/db', results ); 
    client.release();
  } catch (err) { 
    console.error(err);
    res.send("Error " + err);
  }
})
app.get('/cool', (req, res) => res.send(cool()))


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

module.exports = app;
