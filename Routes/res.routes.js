const { resModel } = require("../Models/res.model");
const auth = require("../middlewares/auth.js");
const express = require("express")


const resRouter = express.Router() 

resRouter.use(auth)

resRouter.post('/restaurants' ,async(req, res) => {
    try {
      const newRestaurant = new resModel(req.body);
      await newRestaurant.save();
      res.status(201).send(newRestaurant);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Read operation - GET request to retrieve all restaurants
  resRouter.get('/restaurants', async (req, res) => {
    try {
      const restaurants = await resModel.find();
      res.send(restaurants);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Read operation - GET request to retrieve a single restaurant by ID
  resRouter.get('/restaurants/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const restaurant = await resModel.findById(id);
      if (!restaurant) {
        res.status(404).send({ message: 'Restaurant not found' });
        return;
      }
      res.send(restaurant);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Update operation - PUT request
  resRouter.put('/restaurants/:id',async (req, res) => {
    const { id } = req.params;
    try {
      const updatedRestaurant = await resModel.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedRestaurant) {
        res.status(404).send({ message: 'Restaurant not found' });
        return;
      }
      res.send(updatedRestaurant);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Delete operation - DELETE request
  resRouter.delete('/restaurants/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const deletedRestaurant = await resModel.findByIdAndDelete(id);
      if (!deletedRestaurant) {
        res.status(404).send({ message: 'Restaurant not found' });
        return;
      }
      res.send(deletedRestaurant);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Route to get restaurants within specified radius
  resRouter.get('/restaurants/nearby', async (req, res) => {
    const { latitude, longitude, radius } = req.query;
    try {
      const restaurants = await resModel.find({
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [parseFloat(longitude), parseFloat(latitude)],
            },
            $maxDistance: parseInt(radius),
          },
        },
      });
      res.send(restaurants);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Route to get restaurants within specified radius range
  resRouter.get('/restaurants/range', async (req, res) => {
    const { latitude, longitude, minDistance, maxDistance } = req.query;
    try {
      const restaurants = await Restaurant.find({
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [parseFloat(longitude), parseFloat(latitude)],
            },
            $minDistance: parseInt(minDistance),
            $maxDistance: parseInt(maxDistance),
          },
        },
      });
      res.send(restaurants);
    } catch (error) {
        res.status(500).send(error);
    }
})




module.exports =  {resRouter}