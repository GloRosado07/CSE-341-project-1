const mongodb = require('../data/database');

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().collection('users').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
};

const getSingle = async (req, res) => {
    const userID = req.params.id; // Corrected typo here
    const result = await mongodb.getDatabase().collection('users').findOne({ _id: userID });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
};

module.exports = {
    getAll,
    getSingle
};
