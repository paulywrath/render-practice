const express = require('express')
require('dotenv').config()

const app = express()

app.use(express.static('dist'));

app.get('/api', function (req, res) {
  res.set('X-API-Key', process.env.API_KEY);
  res.send('Test test')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});