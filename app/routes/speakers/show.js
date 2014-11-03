import Ember from 'ember';

export default Ember.Route.extend({
  
  actions:{
    delete: function() {
    var my_model = this.controller.get('model').destroyRecord();
    this.transitionTo('speakers.index');
    }
  }
});
