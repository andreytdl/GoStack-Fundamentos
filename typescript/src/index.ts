import express from 'express';

import createUser from './services/CreateUsers';

const app = express()

app.get('/', (req, res) => {
    const user = createUser({
        name: "Antônio",
        email: "Antonio@rocketseat.com.br",
        password: "123456",
        techs: ['Node.js',
        'React.js',
        'React Native',
        {title: "Javascript", experience: 10000}
        ]
    });
    return res.json(user);
})

app.listen(3333)