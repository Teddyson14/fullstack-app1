const app = require('./app')

const port = 3000

app.listen(port, function(){
    console.log(`Server has been started on http://localhost:%s`, port)
})