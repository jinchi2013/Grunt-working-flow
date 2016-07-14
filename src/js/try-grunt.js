(function(){
	var a = "aadfdkbaje";
	var map = {};
	var tempArr = a.split("");

	tempArr.forEach(function(e){
		if( map.hasOwnProperty(e) ){
			map[e]++;	
		} else {
			map[e] = 1;
		}
	});

	console.log(map);
})();