import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'span',
	classNames: ['erik'],
	init(){
		this._super(...arguments);
		this.arrayOfFruit = Ember.String.w(this.attrs.fruit);
	},
	actions: {
		add(val){
			this.get('arrayOfFruit').pushObject(val);
		}
	}
});
