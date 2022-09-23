const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3000



app.use(bodyParser.json())

app.listen(PORT, () => { 
    console.log(`Server started on port ${PORT}`)
})




//  - get localhost: 3000/firdaus => Hello firdaus, Welcome here  /post
// - post localhost:3000/wale/online => Who knows if wale is online, i have been calling him since
// - get localhost:3000/today => todays date


app.get('/', (req, res) => { 
    res.send('Weclome to Api dev')
 
})  


app.get('/firdaus', (req, res) => { 

    res.send({
        message: 'Hello firdaus, Welcome here'
    })
 
})  

app.post('/create', (req, res) => { 
    const data = req.body 
    console.log(data)
    if (data.firstname == "" || data.lastname == "" || data.email == "") { 
        res.send({
            message: 'All fields are required'
        })
    } else {
        res.send({
            message: `User created successfully. Welcome to the club ${data.firstname} ${ data.lastname}`
        })
    }
    
 
})  

app.get('/today', (req, res) => { 
    let today = new Date()
    res.send(today)
})




