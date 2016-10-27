import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
    actions: {
      commentFormShow() {
        this.set('addNewComment', true);
      },
      saveComment() {
       var params = {
         name: this.get('name'),
         rating: this.get('rating'),
         comment: this.get('comment'),
         climb: this.get('climb')
       };
       this.set('addNewComment', false);
       this.sendAction('saveComment', params);
     }

    }
  });
