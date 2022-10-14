const { send } = require('express/lib/response');
const videoModel = require('../model/videoSource');
const {mutipleMongooseToObject} = require('../../until/mongoose');

class SiteController{
        // [GET] / 
    showHome(req,res,next){
            videoModel.find({})
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
        console.groupCollapsed(categorys);
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
      //[GET] /search?v=value
    searchData(req,res,next){
        videoModel.find({$text: { $search: req.query.v }})
            .populate('idChannel')
            .then((dataVideo)=>{
                // res.json(dataVideo);
                res.render('home',
                {
                    dataVideo: mutipleMongooseToObject(dataVideo)
                });
            })
            .catch(next);
    }

}
module.exports = new SiteController;