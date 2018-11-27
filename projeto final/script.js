		window.onload = function(){
			var stage = document.getElementById('stage');
			var ctx = stage.getContext("2d");
			document.addEventListener("keydown", keypush);
			setInterval(game, 1000/13);

			const vel = 1;

			var vx = vy = 0;
			var px = py = 10;
			var tp = 20;
			var qp = 20;
			var ax = ay = ae = aesp = 15;
			var trail = [];
			var tail = 1;
			var maImg = new Image();
			var macImg = new Image();
			var especial = 0;
			var sla;
			function game(){
				px += vx;
				py += vy;
				if(px<0){
					px = qp-1;
				}
				if(px>qp-1){
					px=0;
				}
				if(py<0){
					py = qp-1;
				}
				if(py > qp-1){
					py = 0;
				}


			ctx.fillStyle = "#009933";
			ctx.fillRect(0,0, stage.width, stage.height);	

    			maImg.src = "ma.png";
    			ctx.drawImage(maImg, ax*tp, ay*tp);  
    			
				if(sla == 2 && especial ==0){				
					macImg.src = "mac2.jpg";
    			    ctx.drawImage(macImg, ae*tp, aesp*tp);
    			    if(ae==px && aesp == py){
    			    					macImg.src = "verde.png";
    			    ctx.drawImage(macImg, ae*tp, aesp*tp);
					tail ++;					
					document.getElementById("resultado").innerHTML = "Tamanho: " + tail;
					especial = 1;
					sla=0;
				}

    			}
    			if(sla == 3){
    				especial = 0;
    			}


			ctx.fillStyle = "#FF3399";
			for (var i = 0; i < trail.length ; i++) {
				ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp, tp);
				if(trail[i].x == px && trail[i].y == py){
					vx = vy = 0;
					tail = 1;
					especial = 0;
					document.getElementById("resultado").innerHTML = "Tamanho: " + tail;
				}
			}
				trail.push({x:px,y:py})
				while(trail.length > tail){
					trail.shift();
				}
				if(ax==px && ay==py){
					tail ++;
					document.getElementById("resultado").innerHTML = "Tamanho: " + tail;
					ax = Math.floor(Math.random()*qp);
					ay = Math.floor(Math.random()*qp);
					ae = Math.floor(Math.random()*qp);
					aesp = Math.floor(Math.random()*qp);
					sla = Math.floor(Math.random()*5);
				}
			}

				

	
		

		function keypush(event){
				if(especial == 1){
					switch (event.keyCode){
				case 37:
					vx = vel;
					vy = 0;
					break;

					case 38:
					vx = 0;
					vy = vel;
					break;

					case 39:
					vx = -vel;
					vy = 0;
					
					break;

					case 40:
					vx = 0;
					vy = -vel;
					
					break;
					default:
					break;
					}
				}
				else{
			switch (event.keyCode){
				case 37:
					vx = -vel;
					vy = 0;
					break;

					case 38:
					vx = 0;
					vy = -vel;
					break;

					case 39:
					vx = vel;
					vy = 0;
					break;

					case 40:
					vx = 0;
					vy = vel;
					break;
					default:
					break;
			}
		}
	}
}