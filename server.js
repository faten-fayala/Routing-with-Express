const express = require('express')

const app = express()

app.use(date=(req, res, next) => {
let hours = new Date().getHours()
console.log(hours)
if (hours <8 ||hours >17 ) {
    return res.sendFile(__dirname + '/public/close.html')
} else 
next();
}

)

app.use(express.static (__dirname + '/public'))



// app.get ('/home',(req,res)=> {
// res.sendFile (__dirname + '/public/ourservices.html')
// }
// )

app.listen(3000,(err)=> {
if (err) console.log("server is not running")
else console.log("server is running on port 3000")
}
)

