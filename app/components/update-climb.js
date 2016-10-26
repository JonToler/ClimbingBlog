import Ember from 'ember';

export default Ember.Component.extend({
  updateClimbForm: false,
   actions: {
     updateClimbForm() {
       this.set('updateClimbForm', true);
     },
     update(climb) {
       var params = {
         location: this.get('location')
       };
       this.set('updateClimbForm', false);
       this.sendAction('update', climb, params);
     }
   }
 });
