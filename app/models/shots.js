import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr('string'),
  title: DS.attr('string'),
  category: DS.attr('string'),
  description: DS.attr('string'),
  author: DS.attr('string'),
  date: DS.attr('string'),
  views: DS.attr('number'),
  categoryDescription: DS.attr('string'),
  categoryIcon: DS.attr('string'),
  categoryIcon2: DS.attr('string')
});
