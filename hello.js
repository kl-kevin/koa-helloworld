var koa = require('koa');  
var app = koa();

app.use(function *(){  
  this.body = '<h1>ExBedia Hello World!</h1>';
});

app.listen(3000);  