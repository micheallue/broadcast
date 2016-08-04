# broadcast
server side broadcast

composer require "soso/broadcast":"@dev"

composer require predis/predis
php artisan vendor:publish --force

.env
...
QUEUE_DRIVER=redis
BROADCAST_DRIVER=redis
...

php artisan migrate
php artisan make:auth

npm install express socket.io ioredis --save
npm install socket.io-client --save

Check:
  GULP Compiler
  Laravel Application（Nginx or php artisan serve）
  Redis server
  隊列監聽器（php artisan queue:listen）
  socket.io server（node socket.js）
