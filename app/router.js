import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('climb');
  this.route('climb-tile');
  this.route('trail', {path: '/trail/:climb_id'});
});

export default Router;
