/**
 * Created by User on 2016/8/3.
 */
var io = require('socket.io-client');

// 建立 socket.io 的連線
var notification = io.connect('http://192.168.1.106:3000');

// 當從 socket.io server 收到 notification 時將訊息印在 console 上
notification.on('disconnect', function() {
    console.log('Got disconnect!');
    notification.reconnect();
});

notification.on('reconnect_failed', function () {
    try {
        console.log('reconnect_failed');
    } catch (e) {
    }
});

notification.on('reconnect', function () {
    try {
        console.log('reconnect');
        notification.reconnect();
    } catch (e) {
    }
});

notification.on('reconnecting', function () {
    try {
        console.log('reconnecting');
    } catch (e) {
    }
});

notification.on('notification', function(message) {
    console.log(message);
    //document.getElementById("testtext").innerText = message;
});