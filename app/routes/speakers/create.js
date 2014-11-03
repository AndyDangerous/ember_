import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('speaker', {
      name: ''
    });
  },
  
  actions: function() {
    var my_model = this.controller.get('model');
    my_model.save();
    this.transitionTo('speakers.show', my_model);
  },
});
