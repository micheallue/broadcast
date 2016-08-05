/**
 * Created by User on 2016/8/3.
 */
var io = require('socket.io-client');
var serverUrl = document.getElementById("text1").innerText;

var notification = io.connect(serverUrl+":57298");

/*var xmlHttp = new XMLHttpRequest();
 xmlHttp.open( "GET", "/getcamerastatus", false ); // false for synchronous request
 xmlHttp.send( null );
 console.log(xmlHttp.responseText);*/

var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function()
{
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
    {
        //console.log(xmlHttp.responseText);
        var obj = JSON.parse(xmlHttp.responseText);

        var strHtml = "";
        for (var i = 0; i < obj.length; i++)
        {
            strHtml = strHtml + "<div class =\"panel-body\" id=\"camera-" +  obj[i].location + "\">" + "camera-" + obj[i].location + " => " + obj[i].status + "</div>";
        }

        $("#text1").html(strHtml);
        //console.log(strHtml);
    }
}

xmlHttp.open("GET", "/getcamerastatus", true); // true for asynchronous
xmlHttp.send(null);

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
    if (message.indexOf("camera") == 0)
    {
        var pos = message.indexOf(":");
        var cameraID = message.substring(0, pos);
        var cameraStatus = message.substring(pos+1, message.length);
        document.getElementById(cameraID).innerText = cameraID + " => " + cameraStatus;
    }
});
