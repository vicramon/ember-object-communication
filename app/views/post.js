import Ember from 'ember';

export default Ember.View.extend({

  didInsertElement: function() {
    // you must setup triggers for the controller to use them
    this.get('controller').on('myTrigger', this.viewFunction)
  },

  viewProperty: "I'm a view property",

  viewFunction: function() {
     alert('triggered');
  }

});
