import Ember from 'ember';

import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Ember.Controller.extend({
  subMenu: false,

  actions: {
    isClicked() {
      let subMenu = get(this, 'subMenu')

      if (subMenu) {
        set(this, 'subMenu', false);
        return;
      }

      set(this, 'subMenu', true);
    },

    transitionToFacebook() {
      window.open('www.facebook.com')
    },

    transitionToLinkedIn() {
      window.open('www.LinkedIn.com')
    },

    transitionToGithub() {
      window.open('www.Github.com')
    }
  }
});
