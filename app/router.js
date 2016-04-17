import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('shot/new');
  this.route('shot', { path: '/shot/:shot_id' });
  this.route('register');
  this.route('login');

  //this.route('shot', function() {
//  this.route('new');
//});
});

export default Router;
