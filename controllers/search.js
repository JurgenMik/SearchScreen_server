const search = require('../models/search');

exports.searchPerson = async (req, res) => {
    const searchParam = req.query.query

    const searchResult = await search.find({
        $or: [
                { name: searchParam },
                { position: searchParam },
            ]
        })
    if (!searchParam) {
        res.status(404).json({message : 'Could not query by request'})
    } else {
        res.send({ searchResult })
    }
}