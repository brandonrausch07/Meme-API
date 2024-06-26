import Enemy from "./enemy.js";
import MovingDirection from "./MovingDirection.js";

export default class EnemyController {
    enemyMap = [
        [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      ];
      enemyRows = [];
 
      currentDirection = MovingDirection.right;
      xVelocity = 0;
      yVelocity = 0;
      defaultXVelocity = 1;
      defaultYVelocity = 1;
 
    constructor(canvas) {
        this.canvas = canvas;
        this.createEnemies();
    }

       draw(ctx) {
        this.updateVelocityAndDirection();
        this.drawEnemies(ctx);
    }

    updateVelocityAndDirection() {
        for(const ememyRow of this.enemyRows){
            if(this.currentDirection == MovingDirection.right){
                this.xVelocity = this.defaultXVelocity;
                this.yVelocity = 0;
            }
        }
    }

    drawEnemies(ctx){
        this.enemyRows.flat().forEach((enemy) => {
            enemy.move(this.xVelocity, this.yVelocity);
            enemy.draw(ctx);
        });
    }
    

    createENemies() {
        this.enemyMap.forEach((row,rowIndex) => {
            this.enemyRows[rowIndex] = [];
             row.forEach((enemeyNubmer,enemyIndex) => {
                    if(enemyNubmer > 0){
                        this.enemyRows[rowIndex].push(
                        new Enemy(enemyIndex * 50, rowIndex * 35, enemyNubmer)
                    );
                 }
             });
        });
    }
}