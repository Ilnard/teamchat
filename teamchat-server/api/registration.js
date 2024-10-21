const crypto = require('crypto')
const sqlite = require('sqlite3').verbose()
require('dotenv').config()

const registration = (paths, user, callback) => {
    const dbMode = sqlite.OPEN_READWRITE
    const db = new sqlite.Database(paths.database, dbMode)

    const response = {
        status: true,
        message: 'Регистрация прошла успешно',
        errors: []
    }

    const errorMessage = 'Регистрация не прошла успешно :('

    if (!user.fullName) {
        response.status = false
        response.message = errorMessage
        response.errors.push({
            name: 'fullName',
            message: 'Нет имени и фамилии'
        })
    } else {
        const userNames = user.fullName.split(' ')
        user.name = userNames[0]
        user.surname = userNames[1]
    }
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
    } else if (user.pass.length < 8) {
        response.status = false
        response.message = errorMessage
        response.errors.push({
            name: 'pass',
            message: 'Пароль должен содержать минимум 8 символов'
        })
    } else {
        user.pass = crypto.pbkdf2Sync(user.pass, process.env.PASSWORD_PRIVATE_KEY, 2, 32, 'sha256').toString('hex')
    }
    if (!user.code) {
        response.status = false
        response.message = errorMessage
        response.errors.push({
            name: 'code',
            message: 'Нет кода приглашения'
        })
    }

    if (!response.status) {
        callback(response)
    } else {
        db.serialize(function () {
            // Создаение таблицы 'users', если ее нет
            db.run(process.env.SQL_CREATE_TABLE_USERS, function (err) {
                if (err) throw err
                console.log("table users created successfully.")
            })
            // Проверяем логин на уникальность
            db.get(`SELECT login FROM users WHERE login = ?`, [user.login], function (err, usersql) {
                if (err) throw err
                if (usersql) {
                    response.status = false
                    response.message = errorMessage
                    response.errors.push({
                        name: 'login',
                        message: 'Аккаунт с данным логином уже существует'
                    })
                    callback(response)
                } else {
                    // Добавляем запись аккаунта в таблицу 'users'
                    db.run(`INSERT INTO users (name, surname, login, pass, avatar_url) VALUES (?, ?, ?, ?, ?)`, [user.name, user.surname, user.login, user.pass, ''], function (err) {
                        if (err) throw err
                        else {
                            response.status = true
                            callback(response)
                        }
                    })
                    db.close()
                }
            })
        })
    }


}

module.exports = {registration}