import Ember from 'ember';

export default Ember.Component.extend({
   isImageShowing: false,
   actions: {
   imageShow: function() {
     this.set('isImageShowing', true);
   },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    update(climb, params) {
    this.sendAction('update', climb, params);
    },
    delete(climb) {
      if (confirm('Are you sure you want to delete this climb?')) {
        this.sendAction('destroyclimb', climb);
      }
    }
 }
});
