const videoModel = require('../model/videoSource');
const channelModel = require('../model/channelSource');
const {mongooseToObject} = require('../../until/mongoose');

class WatchController {
    // [get] /watch/:slug
    watchVideo(req,res,next){
        videoModel.findOne({slug: req.params.slug})
        .populate('idChannel')
        .then(videoSource=>{
            res.json(videoSource);
            //  res.render('videos/showVideo',{videoSource: mongooseToObject(videoSource)})
        })  
        .catch(next)
    }
    
}

module.exports = new WatchController;