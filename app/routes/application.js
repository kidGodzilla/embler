import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    error: function(reason) {
      console.log(reason);
      this.transitionTo('login');
    },
    willTransition: function (transition) {
      if (!this.get('isTransitioning')) {
        transition.abort();
        this.set('isTransitioning', true);
      }

      Ember.$('body').fadeOut('slow');

      Ember.run.later(this, function () {
        if (this.get('isTransitioning')) transition.retry();
        this.set('isTransitioning', false);
        Ember.$('body').fadeIn('slow');
      }, 1000);
    },
    didTransition: function () {
      Ember.run.later(function () {
        $.localScroll();
      }, 300);
      Ember.run.later(function () {
        $(".cache").fadeOut(500);
      }, 1000);
      Ember.run.later(function () {
        $("#wrapper-header").animate({opacity:'1',width:'100%'},500);
      }, 1500);
      Ember.run.later(function () {
        $("#wrapper-navbar").animate({opacity:'1',height:'60px'},500);
      }, 2000);
      Ember.run.later(function () {
        $("#main-container-image").animate({opacity:'1'},500);
      }, 2500);
    }
  }
});
