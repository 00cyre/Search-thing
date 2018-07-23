var keys = [];
var str = "";
var texto;
	$('#currentQuestao').bind("DOMSubtreeModified",function(){
	  data = null;
	});
	window.addEventListener("keydown",
		function(e){
		keys.push(e.key);
		var streng = keys;
		console.clear();
		if(keys[keys.length-1] == 'F4')
		{
			texto = prompt();
		}
		if (texto != null) {
			$.get("https://www.googleapis.com/customsearch/v1?key={KEY}&cx={CX}&q="
			+ texto, function(data) 
			{
				if ($( ".areaEnunciado" ).find( "strong" )["length"] != 0)
				{
					if ($( ".areaEnunciado" ).find( "strong" )[0]["outerText"].length > 20)
					{
						$(".areaEnunciado").html($(".areaEnunciado").html() + "<p><strong>"+data["items"][0]["snippet"] + "</strong></p>")
					}
					else
					{
						$(".areaEnunciado").html($(".areaEnunciado").html() + "<p>"+data["items"][0]["snippet"] + "</p>")
					}
				}
				else
				{
					$(".areaEnunciado").html($(".areaEnunciado").html() + "<p>"+data["items"][0]["snippet"] + "</p>")
				}
			});
			texto = null;
		}
		},false);
		console.clear();