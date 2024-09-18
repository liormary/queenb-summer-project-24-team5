const Item = require('../models/ItemModel');

// get all items
const getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json({items});
    } catch (err) {
        res.status(400).json({mssg: 'error getting items', err})
    }
}

// get all women items
const getAllWomenItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json({items});
    } catch (err) {
        res.status(400).json({mssg: 'error getting items', err})
    }
}

// get all men items
const getAllMenItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json({items});
    } catch (err) {
        res.status(400).json({mssg: 'error getting items', err})
    }
}


// get a single item
const getSingleItem = async (req, res) => {
    const {id} = req.params;

    try {
        const item = await Item.findById(id);
        res.status(200).json({item});
    } catch (err) {
        res.status(400).json({mssg: 'error getting item', err})
    }
}

// create a new item
const createItem = async (req, res) => {
    const {name, category, gender, condition, price, size, imageUrl, description} = req.body;
    //console.log('Received data:', req.body);
    try {
        const item = await Item.create({name, category, gender, condition, price, size, imageUrl, description});
        res.status(200).json({item});
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete item
const deleteItem = async (req, res) => {
    const {id} = req.params;

    try {
        const item = await Item.findByIdAndDelete(id);
        res.status(200).json({item});
    } catch (err) {
        res.status(400).json({mssg: 'error deleting item', err})
    }
}

// update item
const updateItem = async (req, res) => {
    const {id} = req.params;
    const {name, category, gender, condition, price, size, imageUrl, description} = req.body;

    try {
        const item = await Item.findByIdAndUpdate(id, {name, category, gender, condition, price, size, imageUrl, description}, {new: true});
        res.status(200).json({item});
    } catch (err) {
        res.status(400).json({mssg: 'error updating item', err})
    }
}

module.exports = {
    getAllItems,
    getAllWomenItems,
    getAllMenItems,
    getSingleItem,
    createItem,
    deleteItem,
    updateItem,
}
