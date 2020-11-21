const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const mailer = require('./utils/mailer')

app.prepare().then(() => {
    const server = express()

    server.use(bodyParser.json())

    server.post('/api/join', (req, res) => {
        // return handle(req,res)
        const { email } = req.body
        console.log("this is the request body:", req.body)
        mailer({ text: email }).then(() => {
            console.log('success')
            res.send('success')
        }).catch((error) => {
            console.log('failed', error)
            res.send('bad')
        });
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(3000, (err) => {
        if (err) throw err
        console.log('> Read on http://localhost:3000')
    })
})