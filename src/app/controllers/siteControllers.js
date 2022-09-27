const { send } = require('express/lib/response');
const videoModel = require('../model/videoSource');
const {mutipleMongooseToObject} = require('../../until/mongoose');

class SiteController{
        // [GET] / 
    showHome(req,res,next){
            videoModel.find()
                .populate('idChannel')
                .then((dataVideo)=>{
                    // res.json(dataVideo);
                    res.render('home',{
                        dataVideo: mutipleMongooseToObject(dataVideo)
                    });
                })
                .catch(next)
    }

    // [GET] / category? c= category with category
    showCategory(req,res,next){
        var categorys = req.query.c;
        console.log(categorys);
        videoModel.find({category: categorys})
        .populate('idChannel')
        .then((dataVideo)=>{
            res.json(dataVideo);
            // res.render('home',{
            //     dataVideo: mutipleMongooseToObject(dataVideo)
            // });
        })
        .catch(next)
        
    }

}

module.exports = new SiteController;