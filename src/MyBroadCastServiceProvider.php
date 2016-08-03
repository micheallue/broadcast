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
            __DIR__ . '/Events' => base_path('app/Events'),
            __DIR__ . '/js' => base_path('resources/assets/js'),
            __DIR__ . '/gulpfile.js' => base_path('/'),
            __DIR__ . '/socket.js' => base_path('/'),
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
