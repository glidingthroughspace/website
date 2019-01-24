// Thanks to Alexandre Dees for this (https://codepen.io/alexandredees/pen/wseEi)
(function(){
	function generateStars(canvas, ctx, starRadius, count){
		for (it = 0; it < count; it++) {
			ctx.beginPath();
			ctx.arc(starRadius + (Math.random() * canvas.width), starRadius + (Math.random() * canvas.height), starRadius*Math.random(), 0, Math.PI*2, false);
		
			var rand = Math.random();
			if(rand <= 0.5){
					ctx.fillStyle = "rgba(255, 255, 255, 1)";
					ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
					ctx.shadowBlur = 3;
			}
			else if(rand > 0.75){
					ctx.fillStyle = "rgba(255, 254, 196, 1)";
					ctx.shadowColor = "rgba(255, 254, 196, 0.5)";
					ctx.shadowBlur = 4; 
			}
			else{
					ctx.fillStyle = "rgba(192, 247, 255, 1)";
					ctx.shadowColor = "rgba(192, 247, 255, 0.5)";
					ctx.shadowBlur = 7;
			}
			ctx.fill();
		}
	}

	window.onload = function() {
		var canvas = document.getElementById("space");
		var context = canvas.getContext("2d");
		
		onresize = function(){
			canvas.width = canvas.clientWidth;
			canvas.height = canvas.clientHeight;
			generateStars(canvas, context, 3, 250);
		}
		onresize();
	};
})();