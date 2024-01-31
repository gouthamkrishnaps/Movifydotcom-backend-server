// 1) import express
const express = require('express')

// 2) create an object for the class Router in express
const router = new express.Router()

//import usercontroller
const userController = require('../Controller/userController')

//import movieController
const movieController = require('../Controller/movieController')

// 3) path to resolve requests

    // 1) register
    router.post('/user/register',userController.register)

    // 2) login
    router.post('/user/login',userController.login)

    // 3) Upload movie
    router.post('/user/movies',movieController.uploadMovieController)

    // 3) Upload movie
    router.get('/movies/allmovies',movieController.getAllMovieController)

// 4) Export router
module.exports = router