import Ember from 'ember';

export default Ember.Component.extend({
	firstName: 'Erik',
	lastName: 'Hanchett',
	actions:{
		press(val){
			alert('hello! ' + val);
		}
	}
});
