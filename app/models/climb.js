import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  difficulty: DS.attr(),
  location: DS.attr(),
  image: DS.attr()
  });
