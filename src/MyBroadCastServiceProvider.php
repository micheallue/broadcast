<?php

namespace soso\broadcast;

use Illuminate\Support\ServiceProvider;

class MyBroadCastServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->publishes([
            //__DIR__ . '/Events' => base_path('app/Events'),
            __DIR__ . '/js' => base_path('resources/assets/js'),
            __DIR__ . '/gulpfile.js' => base_path('/gulpfile.js'),
            __DIR__ . '/socket.js' => base_path('/socket.js'),
        ]);
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
