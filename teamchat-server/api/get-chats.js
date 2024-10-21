const sqlite = require('sqlite3').verbose()
require('dotenv').config()

const getChatsData = (paths, callback) => {
    const dbMode = sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE | sqlite.OPEN_FULLMUTEX
    const db = new sqlite.Database(paths.database, dbMode)

    let chatsData = []

    db.serialize( function () {
        // Создание таблицы 'users' если ее нет
        db.run(process.env.SQL_CREATE_TABLE_USERS, function (err) {
            if (err) throw err
        })
        // Вставляем в таблицу 'users' дефолтную запись, если таблица пустая
        db.run(`INSERT INTO users (name, surname, avatar_url) SELECT 'Иван', 'Иванов', 'https://dreamrider.ru/wp-content/uploads/2023/01/8v1z7d_t20_yx6vkm-scaled.jpg' WHERE NOT EXISTS (SELECT 1 FROM users)`, function (err) {
            if (err) throw err
        })
        // Получаем всевозможные записи из таблицы 'users', пушим по одной записи в массив users и вызываем callback
        db.each(`SELECT id, name, surname, avatar_url avatarUrl FROM users`, function (err, user) {
            if (err) throw (err)
            else {
                chatsData.push({
                    id: user.id,
                    path: 'chat/' + user.id,
                    user: user
                })
            }
        }, () => {
            callback(chatsData)
        })
        db.close()
    })
}

module.exports = { getChatsData }


