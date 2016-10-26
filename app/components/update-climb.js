import Ember from 'ember';

export default Ember.Component.extend({
  updateClimbForm: false,
   actions: {
     updateClimbForm() {
       this.set('updateClimbForm', true);
     },
     update(climb) {
       console.log("app.component.update");
       var params = {
         location: this.get('location')
       };
       this.set('updateClimbForm', false);
       this.sendAction('update', climb, params);
     }
   }
 });
