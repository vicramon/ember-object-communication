import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    // Expects you to return a promise. Ember
    // will resolve it and set the controller’s
    // 'model' property to the resolved value.
    return this.store.find('post', params.post_id);
  },

  setupController: function(controller, model) {
    this._super(controller, model)
    // you can set controller properties in the
    // setupController function
    controller.set('propertyName', 'propertyValue')
  }

});
