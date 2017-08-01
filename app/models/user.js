var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'user',
  hasTimestamps: true,
  intialize: function() {
    this.on('creating', function(model, attrs, options) {
      // get() = et the current value of an attribute from the model
      // on creating this model, invoke the function
    });
  }
});

module.exports = User;
