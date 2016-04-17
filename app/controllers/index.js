import Ember from 'ember';

export default Ember.Controller.extend({
  filterString: '',
  filteredModel: function () {
    var self = this;
    var filteredShots = this.store.filter('shots', function(shot) {
      return shot.get('title').toLowerCase().indexOf(self.get('filterString').toLowerCase()) !== -1 ||
        shot.get('description').toLowerCase().indexOf(self.get('filterString').toLowerCase()) !== -1;
    });
    return filteredShots;
  }.property('model', 'filterString')
});
