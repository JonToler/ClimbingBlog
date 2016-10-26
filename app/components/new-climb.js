import Ember from 'ember';

export default Ember.Component.extend({
  addNewClimb: false,
  actions: {
    climbFormShow() {
      this.set('addNewClimb', true);
    },
    saveClimb1() {
          var params = {
            location: this.get('location'),
            difficulty: this.get('difficulty'),
            image: this.get('image'),
          };
          this.set('addNewClimb', false);
          this.sendAction('saveClimb2', params);
        }
      }
    });
