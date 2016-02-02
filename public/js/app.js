window.App = {};

$(function(){
var initialize = function(){
	alert('イニシャライズ');
	var collection = new Collection([
			{title:'initialize',body:'test'},
			{title:'initialize2',body:'test2'}
		]);
	console.log(collection);
	collection.each(function(model){
		model.save();
	});
	alert(JSON.stringify(collection.model,null,2));
	return collection.models;
}
var collection = new Collection();


collection.fetch().then(function(col){
	// collection.each(function(){alert('test');});
	// col.each(function(){alert('tesgt');});
	if(col.length === 0){
		var models = initialize();
		collection.reset(models);
	}
	var ulView = new UlView({
		collection:collection,
	});
	mainRenderer.show(ulView);
})


})

