import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('climb');
  },
  actions: {
    destroyclimb(climb) {
      climb.destroyRecord();
      this.transitionTo('index');
    }
  }

});
