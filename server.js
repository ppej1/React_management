const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([{
        'id': 1,
        'image': 'https://placeimg.com/64/64/any',
        'name': '박태원',
        'birthday': '961222',
        'gender': '남자',
        'job': '프로그래머'
    },
    {
        'id': 2,
        'image': 'https://placeimg.com/64/64/any',
        'name': '김영수',
        'birthday': '961222',
        'gender': '남자',
        'job': '의사 '
    },
    {
        'id': 3,
        'image': 'https://placeimg.com/64/64/any',
        'name': '최하라',
        'birthday': '961222',
        'gender': '여자',
        'job': '대학생'
    }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));