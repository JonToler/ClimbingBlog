import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      climbs: this.store.findAll('climb'),
      comments: this.store.findAll('comment')
    });
  },
  actions: {
  saveClimb3(params) {
    var newClimb = this.store.createRecord('climb', params);
    newClimb.save();
    this.transitionTo('index');
  },
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      this.transitionTo('index');
    },
    destroyComment(comment) {
     comment.destroyRecord();
     this.transitionTo('index');
   },

  }
});
