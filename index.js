const jsonServer = require('json-server');

const db = {
    users: [
        {
            "name": "Valeriya Dudoits",
            "birthday": "1993-12-15T12:42:19.000Z",
            "id": 1,
            "country": "Belarus",
            "city": "Minsk",
            "education": [{
                "university": "BNTU",
                "enteredAt": "2011",
                "graduatedAt": "2016",
            }],
            "photo": "https://res.cloudinary.com/dabjalbwe/image/upload/v1626639179/ltf1zg4zztrvcxtkcraw.jpg",
            "online": true,
            "posts": [
                {
                    "text": "My Post",
                    "publishedAt": "2021-02-15T12:42:19.000Z",
                    "likes": 15
                },
                {
                    "text": "My Post2",
                    "publishedAt": "2021-03-15T12:42:19.000Z",
                    "likes": 15
                },
            ],
        },
        {
            "name": "Petr Petrov",
            "birthday": "1987-12-15T12:42:19.000Z",
            "id": 2,
            "country": "USA",
            "city": "California",
            "education": [{
                "university": "BNTU",
                "enteredAt": "2011",
                "graduatedAt": "2016",
            }],
            "photo": "https://res.cloudinary.com/dabjalbwe/image/upload/v1626680641/loq58td3zhaw1oq1y1gg.jpg",
            "online": true,
            "posts": [
                {
                    "text": "My Post",
                    "publishedAt": "2021-02-14T12:42:19.000Z",
                    "likes": 10
                },
                {
                    "text": "My Post2",
                    "publishedAt": "2021-03-12T12:42:19.000Z",
                    "likes": 13
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
                    "publishedAt": "2021-03-12T12:42:19.000Z",
                    "likes": 25
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
                    "publishedAt": "2021-03-12T12:42:19.000Z",
                    "likes": 13
                },
            ],
        },
        {
            "name": "Kolya Stravis",
            "birthday": "1992-10-25T12:42:19.000Z",
            "id": 3,
            "country": "Belarus",
            "city": "Pinsk",
            "education": [{
                "university": "BNTU",
                "enteredAt": "2011",
                "graduatedAt": "2016",
            }],
            "photo": "https://res.cloudinary.com/dabjalbwe/image/upload/v1626690497/drwhze6krwpgdihiihq8.jpg",
            "online": false,
            "posts": [
                {
                    "text": "My Post",
                    "publishedAt": "2021-02-15T12:42:19.000Z",
                    "likes": 15
                },
            ],
        },
        {
            "name": "Anya Korovana",
            "birthday": "1995-10-11T12:42:19.000Z",
            "id": 4,
            "country": "USA",
            "city": "California",
            "education": [{
                "university": "FGTU",
                "enteredAt": "2011",
                "graduatedAt": "2016",
            }],
            "photo": "https://res.cloudinary.com/dabjalbwe/image/upload/v1626690466/d7xazswvkz2wxrlxla6f.jpg",
            "online": true,
            "posts": [
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
                    "publishedAt": "2021-02-14T12:42:19.000Z",
                    "likes": 10
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
                    "publishedAt": "2021-03-12T12:42:19.000Z",
                    "likes": 133
                },
            ],
        },
        {
            "name": "Max Orlov",
            "birthday": "1990-10-12T12:42:19.000Z",
            "id": 5,
            "country": "Russia",
            "city": "Moscow",
            "education": [{
                "university": "MGU",
                "enteredAt": "2011",
                "graduatedAt": "2016",
            }],
            "photo": "https://res.cloudinary.com/dabjalbwe/image/upload/v1626680833/cmvrrgkry99jvxhaifaz.jpg",
            "online": true,
            "posts": [
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt.",
                    "publishedAt": "2021-02-14T12:42:19.000Z",
                    "likes": 10
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
                    "publishedAt": "2021-03-12T12:42:19.000Z",
                    "likes": 133
                },
            ],
        },
        {
            "name": "Max Kotikov",
            "birthday": "1989-09-09T12:42:19.000Z",
            "id": 6,
            "country": "Russia",
            "city": "Moscow",
            "education": [{
                "university": "MGU",
                "enteredAt": "2011",
                "graduatedAt": "2016",
            }],
            "photo": "https://res.cloudinary.com/dabjalbwe/image/upload/v1626680833/cmvrrgkry99jvxhaifaz.jpg",
            "online": false,
            "posts": [
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt.",
                    "publishedAt": "2021-02-14T12:42:19.000Z",
                    "likes": 10
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
                    "publishedAt": "2021-03-12T12:42:19.000Z",
                    "likes": 131
                },
            ],
        },
        {
            "name": "Dasha Utkina",
            "birthday": "1990-10-11T12:42:19.000Z",
            "id": 7,
            "country": "Belarus",
            "city": "Minsk",
            "education": [{
                "university": "BGU",
                "enteredAt": "2011",
                "graduatedAt": "2016",
            }],
            "photo": "https://res.cloudinary.com/dabjalbwe/image/upload/v1626690258/ac0k3pgdg05ruw6yjslc.jpg",
            "online": false,
            "posts": [
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt.",
                    "publishedAt": "2021-02-14T12:42:19.000Z",
                    "likes": 10
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
                    "publishedAt": "2021-03-12T12:42:19.000Z",
                    "likes": 133
                },
            ],
        },
        {
            "name": "Masha Utkina",
            "birthday": "1993-10-11T12:42:19.000Z",
            "id": 12,
            "country": "Belarus",
            "city": "Minsk",
            "education": [{
                "university": "BNTU",
                "enteredAt": "2011",
                "graduatedAt": "2016",
            }],
            "photo": "https://res.cloudinary.com/dabjalbwe/image/upload/v1626690258/ac0k3pgdg05ruw6yjslc.jpg",
            "online": false,
            "posts": [
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt.",
                    "publishedAt": "2021-02-14T12:42:19.000Z",
                    "likes": 100
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    "publishedAt": "2021-03-12T12:42:19.000Z",
                    "likes": 133
                },
            ],
        },
        {
            "name": "Anton Medvedev",
            "birthday": "1995-05-21T12:42:19.000Z",
            "id": 8,
            "country": "Belarus",
            "city": "Minsk",
            "education": [{
                "university": "BNTU",
                "enteredAt": "2011",
                "graduatedAt": "2016",
            }],
            "photo": "https://res.cloudinary.com/dabjalbwe/image/upload/v1626350969/pmrgkvnnzmdcbovfl2q6.jpg",
            "online": true,
            "posts": [
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt.",
                    "publishedAt": "2021-02-14T12:42:19.000Z",
                    "likes": 10
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
                    "publishedAt": "2021-03-12T12:42:19.000Z",
                    "likes": 55
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt.",
                    "publishedAt": "2021-02-14T12:42:19.000Z",
                    "likes": 16
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
                    "publishedAt": "2021-03-12T12:42:19.000Z",
                    "likes": 78
                },
            ],
        },
        {
            "name": "Lara Puzikova",
            "birthday": "1994-05-21T12:42:19.000Z",
            "id": 9,
            "country": "Belarus",
            "city": "Minsk",
            "education": [{
                "university": "BNTU",
                "enteredAt": "2011",
                "graduatedAt": "2016",
            }],
            "photo": "https://res.cloudinary.com/dabjalbwe/image/upload/v1626350198/ejujcztdprih1uekznzg.jpg",
            "online": true,
            "posts": [
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt.",
                    "publishedAt": "2021-02-14T12:42:19.000Z",
                    "likes": 10
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
                    "publishedAt": "2021-03-12T12:42:19.000Z",
                    "likes": 55
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt.",
                    "publishedAt": "2021-02-14T12:42:19.000Z",
                    "likes": 16
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
                    "publishedAt": "2021-03-12T12:42:19.000Z",
                    "likes": 78
                },
            ],
        },
        {
            "name": "Klara Nogova",
            "birthday": "1995-05-20T12:42:19.000Z",
            "id": 10,
            "country": "Belarus",
            "city": "Minsk",
            "education": [{
                "university": "BGUIR",
                "enteredAt": "2011",
                "graduatedAt": "2016",
            }],
            "photo": "https://res.cloudinary.com/dabjalbwe/image/upload/v1626350969/pmrgkvnnzmdcbovfl2q6.jpg",
            "online": true,
            "posts": [
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt.",
                    "publishedAt": "2021-02-14T12:42:19.000Z",
                    "likes": 10
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
                    "publishedAt": "2021-03-12T12:42:19.000Z",
                    "likes": 55
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt.",
                    "publishedAt": "2021-02-14T12:42:19.000Z",
                    "likes": 16
                },
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
                    "publishedAt": "2021-03-12T12:42:19.000Z",
                    "likes": 78
                },
            ],
        },
        {
            "name": "Olga Morkovnays",
            "birthday": "1997-05-20T12:42:19.000Z",
            "id": 11,
            "country": "Belarus",
            "city": "Minsk",
            "education": [{
                "university": "BGUIR",
                "enteredAt": "2011",
                "graduatedAt": "2016",
            }],
            "photo": "https://res.cloudinary.com/dabjalbwe/image/upload/v1626350277/iqcjbdgcivckda4dtlch.jpg",
            "online": false,
            "posts": [],
        },

    ],
};

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

const PORT = 3000;

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});