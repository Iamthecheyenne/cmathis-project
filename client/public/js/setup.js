pp.get('/', function (req, res) {
    res.sendFile('setup.html', {root: './client/views' })
})