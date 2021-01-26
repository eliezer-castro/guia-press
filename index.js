const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const connection = require('./database/database')

const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/articlesController');

const Article = require('./articles/Article');
const Category = require('./categories/Category');



app.set('view engine', 'ejs');
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Database
connection
  .authenticate()
  .then(() => {
    console.log('successfully connected')
  }).catch((error) => {
    console.log(error);
  })

app.use('/', categoriesController)
app.use('/', articlesController)

app.get('/', (req, res) => {
  Article.findAll({
    order:[
      ['id', 'DESC']
    ]
  }).then(articles =>{
    res.render('index', {articles: articles});
  })
})

app.get('/:slug',(req, res)=>{
  var slug = req.params.slug;
  Article.findOne({
    where:{
      slug:slug
    }
  }).then(article =>{
    if(article != undefined){
      res.render('article', {article: article})
    }else{
      res.redirect('/');
    }
  }).catch(err =>{
    res.redirect('/')
  })
});

app.listen(5000, () => {
  console.log('Server is running')
})