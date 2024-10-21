const {Server} = require("socket.io")

const socketPORT = 3001

const io = new Server({
    cors: {
        origin: "http://localhost:5173"
    }
})

const users = {}

io.on('connection', (socket) => {
    socket.on('join', (userId) => {
        if (userId) {
            users[userId] = socket
        }
    })
    socket.on('send message', message => {
        if (users[message.toUserId]) {
            users[message.toUserId].emit('add message', {
                message: message.message,
                fromUserId: message.fromUserId
            })
        }
    })
})

io.listen(socketPORT)