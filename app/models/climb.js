import DS from 'ember-data';

export default DS.Model.extend({
  difficulty: DS.attr(),
  location: DS.attr(),
  image: DS.attr(),
  comment: DS.hasMany('comment', {async: true})
  });
