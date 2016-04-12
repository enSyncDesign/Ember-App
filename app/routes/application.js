import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render();
    this.render('home', {
      into: 'application',
      outlet: 'home'
    });
    this.render('about-us', {
      into: 'application',
      outlet: 'about-us'
    });
    this.render('services', {
      into: 'application',
      outlet: 'services'
    });
    this.render('contact', {
      into: 'application',
      outlet: 'contact'
    });
  }
});
