const mongodb = require('../data/database');
const { ObjectId } = require('mongodb');

const getAll = async (req, res) => {
    const db = mongodb.getDatabase();
    const result = await db.collection('contacts').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
};

const getSingle = async (req, res) => {
    const userID = new ObjectId(req.params.id);
    const db = mongodb.getDatabase();
    const result = await db.collection('contacts').findOne({ _id: userID });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
};

module.exports = {
    getAll,
    getSingle
};
