/**
 * Created by User on 2016/8/3.
 */
var app = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Redis = require('ioredis');
var redis = new Redis();

redis.subscribe('notification', function(err, count) {
    console.log('connect!');
});

redis.on('message', function(channel, notification) {
    console.log(notification);
    notification = JSON.parse(notification);

    // 將訊息推播給使用者
    io.emit('notification', notification.data.message);
});

http.listen(57298, function() {
    console.log('Listening on Port-57298');
});