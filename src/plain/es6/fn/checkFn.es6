


module.exports = {
	init(plain,bullets,enemys){
		this.checkEnemys(enemys,bullets);
		this.checkPlain(plain,enemys);
	},
	checkEnemys(enemys,bullets){
		enemys.map(enemy=>{
			if(enemy.data.isBoom){
				//已爆炸

			}else{
				//未爆炸
				let x = enemy.x,
					y = enemy.y,
					x1 = enemy.x1,
					y1 = enemy.y1;

				bullets.map(rs=>{
					if(rs.y>=y && rs.y<=y1){
						if( (rs.x<=x1 && rs.x>=x) || (rs.x1<=x1 && rs.x1>=x)){
							//飞机被击中
							enemy.data.isHit = true;

							//子弹做删除标识
							this.delSprite(rs);
						}
					}
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
		let x = plain.x,
			y = plain.y,
			x1 = plain.x1,
			y1 = plain.y1;

		enemys.map(rs=>{
			if(!rs.data.isBoom){
				if( (rs.y>=y && rs.y<=y1) || (rs.y1>=y && rs.y1<=y1)){
					if( (rs.x<=x1 && rs.x>=x) || (rs.x1<=x1 && rs.x1>=x)){
						//飞机被击中
						plain.data.isHit = true;
					}
				}
			}
		})
	}
};

