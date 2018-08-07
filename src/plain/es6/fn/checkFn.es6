


module.exports = {
	init(plain,bullets,enemys){
		this.checkEnemys(enemys,bullets);

		console.log(enemys)
	},
	checkEnemys(enemys,bullets){
		enemys.map(enemy=>{
			if(enemy.data.isBoom){
				//已爆炸
				this.setBoomRes(enemy);
			}else{
				//未爆炸
				let x = enemy.x,
					y = enemy.y,
					x1 = enemy.x1,
					y1 = enemy.y1;

				bullets.map(rs=>{
					if(rs.x<=x1 && rs.x>=x && rs.y>=y && rs.y<=y1){
						//飞机被击中
						this.enemyHasHit(enemy);

						//子弹做删除标识
						this.delSprite(rs);
					}else{
						//飞机未击中
						this.enemyHasNoHit(enemy);

					}
				});
			}
		});
	},
	//设置爆炸的资源图
	setBoomRes(enemy){
		enemy.data.boomN++;
		let res = enemy.data.boomRes[enemy.data.boomN];
		if(res){
			enemy.res = res;
		}else{
			this.delSprite(enemy);
		}
	},
	//设置删除标识
	delSprite(sprite){
		sprite.data.isDel = true;
		sprite.alpha = 0;
	},
	//敌机被击中
	enemyHasHit(enemy){
		//判断飞机血
		enemy.data.blood = enemy.data.blood - 1;
		console.log('---------')
		console.log(enemy.data.blood)
		if(enemy.data.blood == 0){
			enemy.data.isBoom = true;
			enemy.data.spd = 0;
			enemy.res = enemy.data.boomRes[enemy.data.boomN];
		}else{
			enemy.res = enemy.data.hitRes;
		}
	},
	enemyHasNoHit(enemy){
		enemy.res = enemy.data.res;
	}
};

