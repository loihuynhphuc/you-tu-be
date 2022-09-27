const videoModel = require('../model/videoSource');
const channelModel = require('../model/channelSource');

class videosController {

    // [GET] /videos/create
    createVideo(req,res,next){
            res.render('videos/createVideos');
    }
    //[POST] /videos/store
     async storeVideo(req,res,next){
        try {
            const newVideo = new videoModel(req.body);
                const saveVideo = await  newVideo.save();
                if(req.body.idChannel){
                      const channel=  channelModel.findById(req.body.idChannel);
                      await channel.updateOne({$push: {videos: saveVideo._id}})   
                }
                res.status(200).json(saveVideo);
        } catch (error) {
            res.status(500).json(err);
        }
                
     }

}

module.exports = new videosController;