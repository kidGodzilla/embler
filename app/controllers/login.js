import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login: function () {
      var that = this;

      var ref = new Firebase("https://embler.firebaseio.com");
      ref.authWithPassword({
        "email": this.get('email'),
        "password": this.get('password')
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      });

      Ember.$('input[type=text], textarea').val('');
      that.transitionToRoute('index');
    }
  }
});
