


module.exports = {
	init(plain,bullets,enemys,powerBoxs){
		this.checkEnemys(enemys,bullets);
		this.checkPlain(plain,enemys);
		this.checkPowerBox(plain,powerBoxs);
	},
	//方块的碰撞检测
	checkPZ(obj1,obj2){
		let check = false;
		if(!(obj1.y1<obj2.y || obj1.y>obj2.y1)){
			if(!(obj1.x1<obj2.x || obj1.x>obj2.x1)){
				check = true;
			}
		}

		return check;
	},

	//判断敌机是否被击中
	checkEnemys(enemys,bullets){
		enemys.map(enemy=>{
			if(enemy.data.isBoom){
				//已爆炸

			}else{
				//未爆炸
				let x = enemy.x + enemy.data.hitSize.x,
					y = enemy.y +enemy.data.hitSize.y,
					x1 = x + enemy.data.hitSize.w,
					y1 = y + enemy.data.hitSize.h,
					obj1 = {
						x:x,
						y:y,
						x1:x1,
						y1:y1
					};

				bullets.map(rs=>{
					let b_x = rs.x,
						b_x1 = rs.x1,
						b_y = rs.y,
						b_y1 = rs.y1,
						obj2 = {
							x:b_x,
							y:b_y,
							x1:b_x1,
							y1:b_y1
						};

					if(this.checkPZ(obj1,obj2)){
						//飞机被击中
						enemy.data.isHit = true;
						enemy.data.blood = enemy.data.blood - rs.data.power;
						//子弹做删除标识
						this.delSprite(rs);
					}

					// if(!(y1<b_y || y>b_y1)){
					// 	if(!(x1<b_x || x>b_x1)){
					// 		//飞机被击中
					// 		enemy.data.isHit = true;
					//
					// 		//子弹做删除标识
					// 		this.delSprite(rs);
					// 	}
					// }
				});
			}
		});
	},
	//设置删除标识
	delSprite(sprite){
		sprite.data.isDel = true;
		sprite.alpha = 0;
	},
	//检查自己飞机
	checkPlain(plain,enemys){
		let x = plain.x + plain.data.size.x,
			y = plain.y + plain.data.size.y,
			x1 = x + plain.data.size.w,
			y1 = y + plain.data.size.h,
			obj1 = {
				x:x,
				y:y,
				x1:x1,
				y1:y1
			};

		enemys.map(rs=>{
			if(!rs.data.isBoom){
				let e_x = rs.x + rs.data.enemySize.x,
					e_y = rs.y +rs.data.enemySize.y,
					e_x1 = e_x + rs.data.enemySize.w,
					e_y1 = e_y + rs.data.enemySize.h,
					obj2 = {
						x:e_x,
						y:e_y,
						x1:e_x1,
						y1:e_y1
					};

				if(this.checkPZ(obj1,obj2)){
					//飞机被击中
					plain.data.isHit = true;
				}

				// if(!(y1<e_y || y>e_y1)){
				// 	if(!(x1<e_x || x>e_x1)){
				// 		//飞机被击中
				// 		plain.data.isHit = true;
				// 	}
				// }
			}
		})
	},
	//检查是否吃到能量球
	checkPowerBox(plain,powerBoxs){
		let x = plain.x + plain.data.size.x,
			y = plain.y + plain.data.size.y,
			x1 = x + plain.data.size.w,
			y1 = y + plain.data.size.h,
			obj1 = {
				x:x,
				y:y,
				x1:x1,
				y1:y1
			};

		powerBoxs.map(rs=>{
			let x = rs.x,y=rs.y,x1=rs.x1,y1=rs.y1,
				obj2 = {x,y,x1,y1};


			if(this.checkPZ(obj1,obj2)){
				//飞机吃到能量球
				//type == 1 blur  type == 0 yellow
				let type = rs.data.type;

				//删除能量球
				rs.data.isDel = true;

				//更改飞机参数
				plain.data.getPowerType = type;
				console.log('get:'+type);
			}
		});


	}
};

