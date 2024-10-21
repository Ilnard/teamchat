const jwt = require("jsonwebtoken")
const crypto = require("crypto")
const sqlite = require('sqlite3').verbose()
require('dotenv').config()

const authorization = (paths, user, callback) => {
    const dbMode = sqlite.OPEN_READONLY
    const db = new sqlite.Database(paths.database, dbMode)

    const response = {
        token: '',
        status: true,
        message: 'Авторизация прошла успешно',
        errors: []
    }

    const errorMessage = 'Нет такого аккаунта :('

    if (!user.login) {
        response.status = false
        response.message = errorMessage
        response.errors.push({
            name: 'login',
            message: 'Нет логина'
        })
    }
    if (!user.pass) {
        response.status = false
        response.message = errorMessage
        response.errors.push({
            name: 'pass',
            message: 'Нет пароля'
        })
    } else {
        user.pass = crypto.pbkdf2Sync(user.pass, process.env.PASSWORD_PRIVATE_KEY, 2, 32, 'sha256').toString('hex')
    }
    if (!response.status) {
        callback(response)
    } else {
        db.serialize(function ()  {
            db.get('SELECT id, name, surname, login, avatar_url avatarUrl FROM users WHERE login = ? AND pass = ?', [user.login, user.pass], function (err, user) {
                if (err) throw err
                if (user) {
                    const token = jwt.sign({
                        id: user.id,
                        name: user.name,
                        surname: user.surname,
                        login: user.login,
                        avatarUrl: user.avatarUrl
                    }, process.env.TOKEN_PRIVATE_KEY)
                    response.token = token
                    callback(response)
                }
                else {
                    response.status = false
                    response.message = 'Пользователь не найден'
                    callback(response)
                }
            })
        })
    }
}
module.exports = {authorization}