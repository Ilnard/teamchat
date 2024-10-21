const sqlite = require('sqlite3').verbose()
require('dotenv').config()

const sendMessage = (paths, {fromUserId, toUserId, message}, callback) => {
    const dbMode = sqlite.OPEN_READWRITE
    const db = new sqlite.Database(paths.database, dbMode)

    db.serialize(function () {
        // Создаение таблицы 'messages', если ее нет
        db.run(process.env.SQL_CREATE_TABLE_MESSAGES, function (err) {
            if (err) throw err
            console.log("table messages created successfully.")
        })
        // Вставляем сообщение 'message' от пользователя 'fromUserId' к пользователю 'toUserId'
        db.run(`INSERT INTO messages (from_user_id, to_user_id, message) VALUES (?, ?, ?)`, [fromUserId, toUserId, message], function (err) {
            if (err) throw err
            else {
                callback(true)
            }
        })
        db.close()
    })
}

module.exports = { sendMessage }