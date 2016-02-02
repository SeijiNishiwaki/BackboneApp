
var Model = Backbone.Model.extend({
	defaults:{
		title:'',
		body:''
	}
});
var model = new Model({
	title:'test',
	body:'testbody'
});
var Collection = Backbone.Collection.extend({
	model:Model,
	localStorage:new Backbone.LocalStorage('notes')
});

