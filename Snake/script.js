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
			var ax = ay = 15;
			var rastro = [];
			calda = 1;
			var maImg = new Image();
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
				

			ctx.fillStyle = "#FF3399";
			for (var i = 0; i < rastro.length ; i++) {
				ctx.fillRect(rastro[i].x*tp, rastro[i].y*tp, tp, tp);
				if(rastro[i].x == px && rastro[i].y == py){
					vx = vy = 0;
					calda = 1;
					document.getElementById("resultado").innerHTML = "Tamanho: " + calda;
				}
			}
				trail.push({x:px,y:py})
				while(rastro.length > calda){
					rastro.shift();
				}
				if(ax==px && ay==py){
					calda ++;
					document.getElementById("resultado").innerHTML = "Tamanho: " + calda;
					ax = Math.floor(Math.random()*qp);
					ay = Math.floor(Math.random()*qp);
				}

		}


		function keypush(event){
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
