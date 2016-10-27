import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('climb');
  },
  actions: {
  saveClimb3(params) {
    debugger; 
    var newClimb = this.store.createRecord('climb', params);
    newClimb.save();
    this.transitionTo('index');
  },

  update(climb, params) {
    Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        climb.set(key,params[key]);
      }
    });
  climb.save();
  this.transitionTo('index');
  },
    destroyclimb(climb) {
      climb.destroyRecord();
      this.transitionTo('index');
    }
  }

});
