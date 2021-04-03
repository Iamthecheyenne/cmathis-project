const express = require('express')
const app = express()
app.use(express.static('client/public'));
const port = 1337

app.get('/', function (req, res) {
res.sendFile('index.html', {root: './client/views' })
})


app.listen(port, () => {
  console.log(`Example app listening at http:localhost:${1337}`)
})




