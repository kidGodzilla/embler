import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createShot: function () {
      var that = this;
      if (!Ember.$('#imageURL').val() || !this.get('title') || !this.get('description')) return;

      var shot = this.store.createRecord('shots', {
        image: Ember.$('#imageURL').val(),
        title: this.get('title'),
        category: "PSD",
        description: this.get('description'),
        author: "AwesomeDude324",
        date: (new Date()).toLocaleString().split(',')[0],
        views: 0,
        categoryDescription: "Photoshop",
        categoryIcon: "img/title-icon-ps.svg",
        categoryIcon2: "img/icon-psdfile.svg"
      });
      shot.save().then(function () {
        Ember.$('input[type=text], textarea').val('');
        that.transitionToRoute('index');
      });
    }
  }
});
