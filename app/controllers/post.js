import Ember from 'ember';

export default Ember.ObjectController.extend(Ember.Evented, {

  controllerProperty: "I'm a controller property",

  // actions are functions that the template can
  // call on user interactions
  actions: {
    actionFunction: function() {
      alert('hello');
    }
  }

});
