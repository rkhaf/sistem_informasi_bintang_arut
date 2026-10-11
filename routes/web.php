<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    // return view('welcome');
    return view('index');
});

Route::get('/beranda', function () {
    // return view('welcome');
    return view('index');
});

Route::get('/galeri', function () {
    // return view('welcome');
    return view('galeri');
});

Route::get('/belanja', function () {
    // return view('welcome');
    return view('belanja');
});

Route::get('/profile', function () {
    // return view('welcome');
    return view('profile');
});

Route::get('/login', function () {
    // return view('welcome');
    return view('login');
});

Route::get('/dashboard', function () {
    // return view('welcome');
    return view('dashboard');
});
