const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let posts = [
  {
    id: 1,
    username: 'Todd',
    title: 'lol',
    text: 'lol that is so funny!',
  },
  {
    id: 2,
    username: 'Skyler',
    title: '안녕하세요',
    text: 'I like to go birdwatching with my dog',
  },
  {
    id: 3,
    username: 'Sk8erBoi',
    title: '가입인사 드립니다',
    text: 'Plz delete your account, Todd',
  },
  {
    id: 4,
    username: 'onlysayswoof',
    title: '요즘 날이 너무 춥네요',
    text: 'woof woof woof',
  },
];

app.get('/posts', (req, res) => {
  res.render('posts/index', { posts });
});

app.listen(3000, () => {
  console.log('ON PORT 3000!');
});
