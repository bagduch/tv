const movie = require("../model/movie.js");


exports.main = async (req, res) => {
    const perPage = 20;

    let search = req.query;
    let page = typeof req.query.page != 'undefined' ? parseInt(req.query.page) : 1;

    delete search['page']


    if (typeof search.vod_year != 'undefined')
        search.vod_year = parseInt(search.vod_year);

    if (typeof search.vod_cid != 'undefined')
        search.vod_cid = parseInt(search.vod_cid);

    if (typeof search.vod_name != 'undefined')
        search = {$or: [{vod_name: new RegExp(search.vod_name)}, {vod_actor: new RegExp(search.vod_name)}]};

    const count = await movie.countDocuments(search);
    const items = await movie.find(search).select({
        "vod_name": 1,
        "_id": 5,
        "vod_continu": 2,
        "vod_year": 3,
        "vod_pic": 4,
        "vod_actor": 5
    }).sort({vod_addtime: 'desc'}).limit(perPage).skip(perPage * (page - 1))
    res.send({total: count, data: items})
}


exports.single = async (req, res) => {
    const item = await movie.findById(req.query.id)
    res.send(item)
}


exports.recent = async (req, res) => {
    const item = await movie.find({
        "vod_addtime": {
            $lt: new Date(),
            $gte: new Date(new Date().setDate(new Date().getDate() - 1))
        }
    }).select({
        "vod_name": 1,
        "_id": 5,
        "vod_continu": 2,
        "vod_year": 3,
        "vod_pic": 4
    })

    res.send(item)
}

