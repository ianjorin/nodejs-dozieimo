const Post = require('../models/post');


exports.getPosts = (req, res, next) => {
  Post.fetchAll(posts => {
    res.render('blog/index', {
      posts: posts,
      path: '/posts'
    });
  });
};

exports.getPost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId, post => {
    res.render('blog/single', {
      post: post,
      //pageTitle: post.title,
      path: '/posts'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Post.fetchAll(posts => {
    res.render('blog/index', {
      posts: posts,
      pageTitle: 'Posts',
      path: '/'
    });
  });
};