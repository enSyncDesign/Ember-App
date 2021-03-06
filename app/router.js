import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('about-us');
  this.route('services');
  this.route('contact');
});

export default Router;
