# broadcast
server side broadcast

composer require "soso/broadcast":"@dev"

composer require predis/predis
php artisan vendor:publish --provider="soso\broadcast\MyBroadCastServiceProvider" --force

.env
...
QUEUE_DRIVER=redis
BROADCAST_DRIVER=redis
...

php artisan migrate
php artisan make:auth

"C:\PROGRA~1\nodejs\npm" install <br>
"C:\PROGRA~1\nodejs\npm" install gulp<br>
npm install express socket.io ioredis --save<br>
npm install socket.io-client --save<br>

Check:
  GULP Compiler
  Laravel Application（Nginx or php artisan serve）
  Redis server
  隊列監聽器（php artisan queue:listen）
  socket.io server（node socket.js）
