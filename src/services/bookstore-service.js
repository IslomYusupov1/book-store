export default class BookstoreService {

    data = [
        {

            id: 1,
            title: 'Learning React',
            author: 'Banks Alex, Eve Porcello',
            price: 100,
            coverImage: "https://m.media-amazon.com/images/I/51Q43WRXJzL.jpg"
        },
        {
            id: 2,
            title: 'Fullstack React',
            author: 'Ari Lerner, Nate Murray ',
            price: 300,
            coverImage: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSqYX5QEZwHefA6KImnRE89ClJhgPxNqoFRKpBOgL4JCLLRAd36"
        },
        {
            id: 3,
            title: 'HTML & CSS',
            author: 'Jhon Jacket',
            price: 200,
            coverImage: "https://litportal.ru/covers/38272898.jpg"
        },
        {
            id: 4,
            title: 'Изучаем JavaScript',
            author: 'Elizabet Robson',
            price: 600,
            coverImage: "https://monster-book.com/sites/default/files/styles/sc290x400/public/books/izuchaem-programmirovanie-na-javascript.jpg?itok=4LNq8IGY"
        },
        {
            id: 5,
            title: 'ECMAScript 6',
            author: 'Narayan Pasty',
            price: 15,
            coverImage: "https://litportal.ru/covers/22806632.jpg"
        },
        {
            id: 6,
            title: 'JavaScript by example',
            author: 'Adrian Kingsly-Xyo',
            price: 35,
            coverImage: "https://avidreaders.ru/pics/1/7/568417.jpeg"
        }
    ]
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something bad happened'));
                } else {
                    resolve(this.data);
                }
            }, 700);
        });
    }

}