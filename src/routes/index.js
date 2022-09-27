const siteRouter = require('./site');
const watchRouter = require('./watch');
const videosRouter = require('./videos');
const channelRouter = require('./channels');
function route(app){

        app.use('/channel',channelRouter);
      
        app.use('/videos',videosRouter);

        app.use('/watch',watchRouter);

        app.use('/',siteRouter);
}

module.exports = route;