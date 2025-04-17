const express = require('express');
const Restaurant = require('../models/restaurant');

const router = express.Router();

// Create a new restaurant (C - Create)
router.post('/restaurants', async (req, res) => {
    try {
        const restaurant = new Restaurant(req.body);
        await restaurant.save();
        res.status(201).send(restaurant);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Get all restaurants (R - Read)
router.get('/restaurants', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).send(restaurants);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Update a restaurant (U - Update)
router.put('/restaurants/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!restaurant) {
            return res.status(404).send();
        }
        res.status(200).send(restaurant);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete a restaurant (D - Delete)
router.delete('/restaurants/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
        if (!restaurant) {
            return res.status(404).send();
        }
        res.status(200).send(restaurant);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
