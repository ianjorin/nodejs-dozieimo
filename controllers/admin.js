const Post = require('../models/post');

exports.getAddPost = (req, res, next) => {
  res.render('admin/add-post', {
    pageTitle: 'Add Post',
    path: '/admin/add-post',
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const author = req.body.author;
  const body = req.body.content;
  const post = new Post(null, title, imageUrl, body, author);
  post.save();
  res.redirect('/');
};