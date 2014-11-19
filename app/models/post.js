import DS from 'ember-data';

var postModel = DS.Model.extend({
  name: DS.attr('string')
});

postModel.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Post 1' },
    { id: 2, name: 'Post 2' },
    { id: 3, name: 'Post 3' }
  ]
})

export default postModel;
