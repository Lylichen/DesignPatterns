/**
 * 中介模式
 * @description 解除对象与对象之间的耦合关系
 * @example 三国杀1对1
 */
class Hero{
    constructor(name){
        this.name = name;
        this.enemy = null;
    }
    win(){
        console.log(this.name + "win")
    }
    lose(){
        console.log(this.name + "lose")
    }
    die(){
        this.lose();
        this.enemy.win();
    }
    setenemy(enemy){
        this.enemy = enemy;
    }
}
// 初始化2个对象
var h1 = new Hero("朱元璋");
var h2 = new Hero("刘伯温");
// 给玩家设置敌人
h1.setenemy(h2);
h2.setenemy(h1);
// 朱元璋死了 也就输了
h1.die();  // 输出 朱元璋lose 刘伯温Won