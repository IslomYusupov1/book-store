export default class UserService {

    data = [
        {
            id: 1,
            Name: 'islom',
            password: 123,
        },
        {
            id: 2,
            Name: 'alim',
            password: 123
        },
        {
            id: 3,
            Name: 'Jhon',
            password: 123
        },
    ]
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)
                reject(new Error('Something bad happened'))
            }, 700)
        });
    }

}