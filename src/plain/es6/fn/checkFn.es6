


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
				let x = enemy.x + enemy.data.hitSize.x,
					y = enemy.y +enemy.data.hitSize.y,
					x1 = x + enemy.data.hitSize.w,
					y1 = y + enemy.data.hitSize.h;

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
		let x = plain.x + plain.data.size.x,
			y = plain.y + plain.data.size.y,
			x1 = x + plain.data.size.w,
			y1 = y + plain.data.size.h;

		enemys.map(rs=>{
			if(!rs.data.isBoom){
				let e_x = rs.x + rs.data.enemySize.x,
					e_y = rs.y +rs.data.enemySize.y,
					e_x1 = e_x + rs.data.enemySize.w,
					e_y1 = e_y + rs.data.enemySize.h;

				if( (e_y>=y && e_y<=y1) || (e_y1>=y && e_y1<=y1)){
					if( (e_x<=x1 && e_x>=x) || (e_x1<=x1 && e_x1>=x)){
						//飞机被击中
						plain.data.isHit = true;
					}
				}
			}
		})
	}
};

