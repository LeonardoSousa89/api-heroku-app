const port = process.env.PORT || 8081
const environment_dev  = process.env.NODE_ENV     || 'development'
const environment_prod = process.env.DATABASE_URL || 'production'
const db   = require('./knexfile')[environment_prod]
const knex = require('knex')(db)
const cors = require('cors')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:'*'}))
app.listen(port,()=>{
    console.log(`online into port:${port}`)
})

app.get('/',(req,res)=>{
        knex.select('*')
            .table('auth')
            .then(auth =>{
                res.status(200).json(auth)
            })
            .catch(err =>{
                res.status(500).json(err)
            })
})