var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var hbs = require('hbs');
var exphbs  = require('express-handlebars');

var port = process.env.PORT || 3000;



// view engine setup
app.engine('.hbs', exphbs({defaultLayout:'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

io.on('connection', function (socket) {
  socket.emit('send', { hello: 'send from backend' });
  socket.on('sendBack', function(data){
    console.log(data.sendBackData)
  })
});

app.get('/', (req, res)=>{
  res.render('index');
})

server.listen(port, ()=>{
  console.log(`server up on ${port}`);
});
