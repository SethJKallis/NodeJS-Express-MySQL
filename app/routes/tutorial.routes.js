module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

    let router = require("express").Router();

    //MIDDLEWARE
    const message = require('../middleware/message')

    //Create a new tutorial
    router.post('/', tutorials.create);

    //Retrieve all tutorials
    router.get('/', tutorials.findAll);

    //Retrieve all published tutorials
    router.get('/published', tutorials.findAllPublished);

    //Retrieve a single tutorial
    router.get('/:id', tutorials.findOne);

    //Update a tutorial with id
    router.put('/:id', tutorials.update);

    //Delete a tutorial
    router.delete('/:id', tutorials.delete);

    router.delete('/', tutorials.deleteAll);

    app.use('/api/tutorials', router);
};