const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

router.get('/about',function(req,res){
  res.sendFile('about.html', { root: path.join(__dirname, '../public') });
});



//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
