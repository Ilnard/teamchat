const sqlite = require('sqlite3').verbose()
require('dotenv').config()

const getChatData = (paths, {fromUserId, toUserId}, callback) => {
    if (!toUserId) return
    const dbMode = sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE | sqlite.OPEN_FULLMUTEX
    const db = new sqlite.Database(paths.database, dbMode)

    let chatData = {
        user: {},
        messages: []
    }

    db.serialize(function () {
        // Создаем таблицу 'users' если она не существует
        db.run(process.env.SQL_CREATE_TABLE_USERS, function (err) {
            if (err) throw err
        })
        // Получаем данные о пользователе по его id и вызываем callback
        db.get('SELECT name, surname, avatar_url avatarUrl FROM users WHERE id = ?', toUserId, function (err, user) {
            if (err) throw err
            chatData.user = user
        })
        db.each('SELECT id, from_user_id fromUserId, to_user_id toUserId, created_at createdAt, updated_at updatedAt, message FROM messages WHERE (from_user_id = ? AND to_user_id = ?) OR (from_user_id = ? AND to_user_id = ?)',
            [fromUserId, toUserId, toUserId, fromUserId], function (err, message) {
                if (err) throw err
                chatData.messages.push(message)
            }, function () {
                callback(chatData)
            })
    })
}

module.exports = {getChatData}