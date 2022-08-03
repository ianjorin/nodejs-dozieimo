const fs = require('fs');
const path = require('path');


const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'posts.json'
);

const getPostsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Post {
  constructor(id, title, imageUrl, body, author) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.body = body;
    this.author = author;
  }

  save() {
    getPostsFromFile(posts => {
      if (this.id) {
        const existingPostIndex = posts.findIndex(
          post => post.id === this.id
        );
        const updatedPosts = [...posts];
        updatedPosts[existingPostIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedPosts), err => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        posts.push(this);
        fs.writeFile(p, JSON.stringify(posts), err => {
          console.log(err);
        });
      }
    });
  }

  

  static fetchAll(cb) {
    getPostsFromFile(cb);
  }

  static findById(id, cb) {
    getPostsFromFile(posts => {
      const post = posts.find(p => p.id === id);
      cb(post);
    });
  }
};