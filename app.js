const express = require("express");
const ejs = require('ejs');
const md5 = require('md5');
const bodyParser = require('body-parser')

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended:true
}));

let text = "Genesis Block";

let textList = [text];
let store = [md5(text)]


app.get("/", function(req,res){
  res.render("index", {textList: textList, hashList:store});
})

app.post("/", function(req,res){
  let newText = req.body.text;
  textList.push(newText);
  store.push(md5(textList));
  res.redirect('/');
})

app.listen(process.env.PORT || 3000, function(req,res){
  console.log("RUNS ON PORT 3000")
})
