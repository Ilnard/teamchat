const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bodyParser = require('body-parser')
require('./api/chat-socket')
const {response} = require("express");

const app = express()
const PORT = process.env.PORT || 3000

const paths = {
    database: './db/teamchat.db'
}

const getChatsData = require('./api/get-chats').getChatsData
const getChatData = require('./api/get-chat').getChatData
const getLastMessage = require('./api/get-last-message').getLastMessage
const sendMessage = require('./api/send-message').sendMessage
const registration = require('./api/registration').registration
const authorization = require('./api/authorization').authorization

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(bodyParser.json())

app.get('/api/get-chats-data', function (req, res) {
    const accessToken = req.header('Cookie') ? req.header('Cookie').split('=')[1] : ''
    jwt.verify(accessToken, process.env.TOKEN_PRIVATE_KEY, (err, decoded) => {
        if (err) {
            res.json({
                status: false
            })
        }
        else {
            getChatsData(paths, (chatsData) => {
                res.json({
                    status: true,
                    data: chatsData
                })
            })
        }
    })

})
app.get('/api/get-chat-data/:fromUserId/:toUserId', function (req, res) {
    const fromUserId = req.params.fromUserId
    const toUserId = req.params.toUserId
    getChatData(paths, {fromUserId, toUserId}, (chatData) => {
        res.json({
            status: true,
            data: chatData
        })
    })
})
app.get('/api/get-last-message/:fromUserId/:toUserId', function (req, res) {
    const fromUserId = req.params.fromUserId
    const toUserId = req.params.toUserId
    getLastMessage(paths, {fromUserId, toUserId}, (lastMessage) => {
        res.json({
            status: true,
            data: lastMessage
        })
    })
})
app.post('/api/send-message', function (req, res) {
    const body = req.body
    sendMessage(paths, body, (status) => {
        res.json({status})
    })
})
app.post('/api/registration', function (req, res) {
    const body = req.body
    registration(paths, {...body}, (response) => {
        if (response.status === true) {
            authorization(paths, {...body}, (response) => {
                res.cookie('access_token', response.token, {
                    path: '/',
                    expires: new Date(Date.now() + 3600 * 60 * 60 * 1000),
                }).json({
                    status: true,
                    message: 'Регистрация прошла успешно :)',
                    accessToken: response.token
                })
            })
        } else res.json(response)

    })
})
app.post('/api/login', function (req, res) {
    const body = req.body
    authorization(paths, body, (response) => {
        if (response.status) {
            res.cookie('access_token', response.token, {
                path: '/',
                expires: new Date(Date.now() + 3600 * 60 * 60 * 1000),
                httpOnly: true
            }).json({
                status: true,
                message: 'Авторизация прошла успешно :)',
                accessToken: response.token
            })
        } else res.json(response)

    })
})
app.post('/api/logout', function (req, res) {
    console.log('logout')
    res.cookie('access_token', '', {
        path: '/',
        expires: new Date(Date.now() + 1),
        httpOnly: true
    }).json({
        status: true
    })
})

app.listen(PORT, (err) => {
    if (err) throw err
    console.log(`Server listening on PORT: ${PORT}`)
})