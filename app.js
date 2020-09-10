//1.引包;
var express = require("express");
//2.创建你的server应用程序
//也就是原来的http.creatServer
//下面的express（）相当http.createServer
var app = express();
//当服务器收到get请求/的时候，执行回调处理函数
app.get("/", function (req, res) {
  res.send("hello express撒大声地");
});

//相当于server .listen
app.listen(3000, function () {
  console.log("app is running at port 3000");
});
