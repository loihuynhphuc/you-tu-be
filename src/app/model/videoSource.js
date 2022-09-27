const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

// slug generator
mongoose.plugin(slug) 

const VideoSchema = new Schema({
  idVideo: {type: String , require: true},
  imgVideo: String,
  titleVideo: {type: String, require: true},
  description: String,
  date: { type: Date, default: Date.now },
  slug: String,
  videoId: String,
  idChannel: { type: String, ref: 'channel' },
  slug: { type: String, slug: "titleVideo" },
  category: String
});

const videoModel = mongoose.model('video', VideoSchema);

// videoModel.find()
//         .populate('channel')
//         .then(data=>console.log(data))
//         .catch(err=>console.log(err))
// for(var i=1 ; i<= 4;i++){
//   videoModel.create({
//     idVideo: "idVideo_"+i,
//     imgVideo: "psg-nates-hight-light.webp" ,
//     sourceVideo: "#",
//   titleVideo: 'Highlights Nantes - PSG l Messi Phô Diễn Tài Kiến Tạo Đỉnh Cao Giúp PSG Đại Thắng',
//   description: 'Highlights Trận cầu mãn nhãn: Nantes - PSG l Messi Phô Diễn Tài Kiến Tạo Đỉnh Cao Giúp PSG Đại Thắng',
//   date: '12/9/2022' })
// }
module.exports = videoModel;