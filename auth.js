module.exports = function(info){
  var ret = {
    signup: {
      password: function (req) {

      }
    },
    signin: {
      password: function (req) {

      }
    },
    signout: {
      password: function (req) {

      }
    },
    token: {
      create: function (type) {

      },
      validate: function (type) {

      },
    },
    delete: function(){},
    resetPassword: function () {},
  }
  return ret;
}
