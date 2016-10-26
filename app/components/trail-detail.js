import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(climb) {
      if (confirm('Are you sure you want to delete this climb?')) {
        this.sendAction('destroyClimb', climb);
      }
    }
  }
});
