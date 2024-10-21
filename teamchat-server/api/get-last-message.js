const sqlite = require('sqlite3').verbose()
require('dotenv').config()

const getLastMessage = (paths, {fromUserId, toUserId}, callback) => {
    const dbMode = sqlite.OPEN_READWRITE
    const db = new sqlite.Database(paths.database, dbMode)

    db.serialize(function () {
        // Создаение таблицы 'messages', если ее нет
        db.run(process.env.SQL_CREATE_TABLE_MESSAGES, function (err) {
            if (err) throw err
        })
        // Вставляем сообщение 'message' от пользователя 'fromUserId' к пользователю 'toUserId'
        db.get(`SELECT from_user_id fromUserId, to_user_id toUserId, message FROM messages WHERE (from_user_id = ${fromUserId} AND to_user_id = ${toUserId}) OR (from_user_id = ${toUserId} AND to_user_id = ${fromUserId}) ORDER BY created_at DESC LIMIT 1`, function (err, lastMessage) {
            if (err) throw err
            else {
                callback(lastMessage)
            }
        })
        db.close()
    })
}

module.exports = { getLastMessage }