

var Renderer = Backbone.View.extend({
	destroy:function(view){
		if(!view)return;
		view.off();
		view.remove();
	},
	empty:function(view){
		if(!view)return;
		this.destroy(this.currentView);
		this.currentView = view;
	},
	show:function(view){
		this.destroy(this.currentView);//this.currentViewがない場合はdestroy()の条件判定で無視される
		this.$el.append(view.render().el);
		this.currentView = view;//ここで最初にcurrentViewがつくられる
	},
});
var mainRenderer = new Renderer({
	el:'#main-container',
});
