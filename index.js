const express = require('express')
const app = express()


//EJS CONFIGURATION
const ejsConfig = (()=>{
    app.set("view engine", "ejs")
    app.use(express.static('public'))
})

const rotas = (()=>{
    app.get("/", (req, res)=>{
        res.render("index")
    })
    
    app.get("/onepage", (req, res)=>{
        res.render("onepage")
    })
    
    app.get("/mobile-first", (req, res)=>{
        res.render("mobile-first")
    })
    
    app.get("/features", (req, res)=>{
        res.render("features")
    })
    
    app.get("/micro-games", (req, res)=>{
        res.render("micro-games")
    })
})

ejsConfig()
rotas()

app.listen(4000, (error)=>{
    if(error){
        console.log("Server not running...")
    }else{
        console.log("Server running Ok!")
    }
})