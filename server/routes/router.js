const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add_user', services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update_user', services.update_user)


// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.post('/api/upusers', controller.update);
route.post('/api/delete', controller.delete);


module.exports = route