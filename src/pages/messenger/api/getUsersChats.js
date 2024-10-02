const chatsData = () => {
    // Временно fakeData
    const data = [
        {
            id: 1,
            get path() { return '/chats/' + this.id },
            user: {
                id: 24,
                name: 'Владимир',
                surname: 'Централ',
                avatarUrl: ''
            },
            lastMessage: {
                from_id: 15,
                to_id: 24,
                message: {
                    id: 7893,
                    value: 'Привет, как дела?',
                    replied: {},
                    createdAt: '2024-08-24 16:37',
                    updatedAt: '2024-08-24 16:37',
                }
            }
        },
        {
            id: 2,
            get path() { return '/chats/' + this.id },
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

    return data
}

const dataFromServer = chatsData()

export default dataFromServer