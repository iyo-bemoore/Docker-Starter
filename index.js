const express = require('express')
const app = express()

app.get('/' , ( req, res ) => {
  res.send('HELLO')
});

const PORT = 3000    
app.listen(PORT , ()=>{
    console.log('App up and running on' , PORT)
})
