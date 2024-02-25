const express = require('express');
const methodOverride = require('method-override');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let posts = [
  {
    id: uuid(),
    username: 'Todd',
    title: 'lol',
    content: 'lol that is so funny!',
  },
  {
    id: uuid(),
    username: 'Skyler',
    title: '안녕하세요',
    content: 'I like to go birdwatching with my dog',
  },
  {
    id: uuid(),
    username: 'Sk8erBoi',
    title: '가입인사 드립니다',
    content: 'Plz delete your account, Todd',
  },
  {
    id: uuid(),
    username: 'onlysayswoof',
    title: '요즘 날이 너무 춥네요',
    content: 'woof woof woof',
  },
];

app.get('/posts', (req, res) => {
  res.render('posts/index', { posts });
});

app.get('/posts/new', (req, res) => {
  res.render('posts/new', { posts });
});

app.post('/posts', (req, res) => {
  const { username, title, content } = req.body;
  posts.push({ username, title, content, id: uuid() });
  res.redirect('/posts');
});

app.get('/posts/:id', (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === id);
  res.render('posts/show', { post });
});

app.get('/posts/:id/edit', (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === id);
  res.render('posts/edit', { post });
});

app.patch('/posts/:id', (req, res) => {
  const { id } = req.params;
  const { title: newTitle, content: newContent } = req.body;
  const foundPost = posts.find((p) => p.id === id);
  foundPost.title = newTitle;
  foundPost.content = newContent;
  res.redirect('/posts');
});

app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  posts = posts.filter((p) => p.id !== id);
  res.redirect('/posts');
});

app.listen(3000, () => {
  console.log('ON PORT 3000!');
});
