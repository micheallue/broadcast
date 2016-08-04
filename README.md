# broadcast
server side broadcast<br>

composer require "soso/broadcast":"@dev"<br>
<br>
composer require predis/predis<br>
php artisan vendor:publish --provider="soso\broadcast\MyBroadCastServiceProvider" --force<br>
<br>
.env<br>
...<br>
QUEUE_DRIVER=redis<br>
BROADCAST_DRIVER=redis<br>
...<br>
<br>
php artisan migrate<br>
php artisan make:auth<br>
<br>
"C:\PROGRA~1\nodejs\npm" install <br>
"C:\PROGRA~1\nodejs\npm" install gulp<br>
npm install express socket.io ioredis --save<br>
npm install socket.io-client --save<br>
<br>
Check:<br>
  GULP Compiler<br>
  Laravel Application（Nginx or php artisan serve）<br>
  Redis server<br>
  隊列監聽器（php artisan queue:listen）<br>
  socket.io server（node socket.js）<br>
