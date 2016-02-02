var LiView = Backbone.View.extend({
	tagName:'li',
	template:$('.list-template').html(),
	initialize:function(){
		this.listenTo(this.model,'destroy',this.remove);
	},
	events:{
		'click .js-delete':'destroyData'
	},
	render:function(){
		var template = _.template(this.template);
		var html = template(this.model.toJSON());
		this.$el.html(html);
		return this;
	},
	destroyData:function(){
		this.model.destroy();
	}
});
var UlView = Backbone.View.extend({
	tagName:'ul',
	render:function(){
		// console.log(this.collection);
		this.collection.each(function(model){
			var liView = new LiView({
				model:model,
			});
			this.$el.append(liView.render().el);
		},this);
		return this;
	}
});

