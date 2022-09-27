module.exports = {
    mutipleMongooseToObject: function(mongoosesArray){
        return  mongoosesArray.map(mongooseArray=>mongooseArray.toObject());
    },
    mongooseToObject(mongooseObject){
      return  mongooseObject? mongooseObject.toObject() : mongooseObject;
    }
}