const mongoose = require('mongoose');
const { populate } = require('./videoSource');
const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
    nameChanel: String,
    views: Number,
    avatar: String,
    videos:[{ type: String, ref: 'video' }]
},{
    timestamps: true
})
const ChannelModel = mongoose.model('channel',ChannelSchema);



// ChannelModel.create({nameChanel: 'blv tien dung', views: 50000, avatar: "img/avatar_profile.jpg"})
//         // .populate('videos')
//         .then(data=>console.log(data))
//         .catch(err=> console.log('lỗi data'))
module.exports = ChannelModel;