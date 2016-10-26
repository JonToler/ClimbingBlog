import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('climb');
  },
  actions: {
  saveClimb3(params) {
    var newClimb = this.store.createRecord('climb', params);
    newClimb.save();
    this.transitionTo('index');
  },
    destroyclimb(climb) {
      climb.destroyRecord();
      this.transitionTo('index');
    }
  }

});
