import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
     return this.store.findRecord('climb', params.climb_id);
   },
   actions: {
     update(climb, params) {
       Object.keys(params).forEach(function(key) {
         if(params[key]!==undefined) {
           climb.set(key,params[key]);
         }
       });
     climb.save();
     this.transitionTo("trail");
     }
   }
 });
