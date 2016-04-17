import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createUser: function () {
      var that = this;
      var ref = new Firebase("https://embler.firebaseio.com");
      ref.createUser({
        email: this.get('email'),
        password: this.get('password')
      }, function(error, userData) {
        if (error) {
          switch (error.code) {
            case "EMAIL_TAKEN":
              console.log("The new user account cannot be created because the email is already in use.");
              break;
            case "INVALID_EMAIL":
              console.log("The specified email is not a valid email.");
              break;
            default:
              console.log("Error creating user:", error);
          }
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
          // Success!
          Ember.$('input[type=text], textarea').val('');
          that.transitionToRoute('login');
        }
      });
    }
  }
});
