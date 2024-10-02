const chatsData = () => {
    // Временно fakeData
    return [
        {
            get path() {
                return '/chat/' + this.user.id
            },
            user: {
                id: 24,
                name: 'Владимир',
                surname: 'Централ',
                avatarUrl: 'https://dreamrider.ru/wp-content/uploads/2023/01/8v1z7d_t20_yx6vkm-scaled.jpg'
            },
            lastMessage: {
                from_id: 15,
                to_id: 24,
                message: {
                    id: 7893,
                    value: 'Привет, как дела? У меня все хорошо, я очень рад, я наконец-то',
                    replied: {},
                    createdAt: '2024-08-24 16:37',
                    updatedAt: '2024-08-24 16:37',
                }
            }
        },
        {
            get path() {
                return '/chat/' + this.user.id
            },
            user: {
                id: 25,
                name: 'Елена',
                surname: 'Бойка',
                avatarUrl: ''
            },
            lastMessage: {
                from_id: 25,
                to_id: 15,
                message: {
                    id: 7895,
                    value: 'Привет, как дела?',
                    replied: {},
                    createdAt: '2024-06-15 12:11',
                    updatedAt: '2024-06-15 12:11',
                }
            }
        }
    ]
}

const dataFromServer = chatsData()

export default dataFromServer