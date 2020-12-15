const express = require('express');
const router = express.Router();
const Category = require('./Category')
const slugfy = require('Slugify')


router.get('/admin/categories/new', (req, res) => {
  res.render('admin/categories/new')
})

router.post('/categories/save', (req, res) => {
  var title = req.body.title
  if (title != undefined) {
    Category.creat({
      title: title,
      slug: slugfy(title)
    }).then(()=>{
      res.redirect("/");
    })
  } else {
    req.redirect('/admin/categories/new')
  }
});

module.exports = router;