const videoModel = require('../model/videoSource');
const channelModel = require('../model/channelSource');

class channelController {

    // [GET] / channel/create
    createChannel(req,res,next){
        res.render('channels/createChannel');}

    // [post] / channel/store
    async storeChannel(req,res,next){
        console.log(req.body)
        const newChannel = new channelModel(req.body);
              await  newChannel.save()
                .then(newChannel=>res.json(newChannel))
                .catch(next);
                
    }

}

module.exports = new channelController;