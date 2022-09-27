const videoModel = require('../model/videoSource');
const channelModel = require('../model/channelSource');
const {mongooseToObject} = require('../../until/mongoose');

class WatchController {
    // [get] /watch/:slug
    watchVideo(req,res,next){
        videoModel.findOne({slug: req.params.slug})
        .then(videoSource=>{
             res.render('videos/showVideo',{videoSource: mongooseToObject(videoSource)})
        })  
        .catch(next)
    }
    
}

module.exports = new WatchController;