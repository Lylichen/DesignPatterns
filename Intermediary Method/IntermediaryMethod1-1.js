/**
 * 中介模式
 * 定义一个playerDirector类用来接收玩家请求并执行相应动作
 * TODO  回去改
 */
var palyers = [];//所有玩家
class playDirector{
    constructor(){
        this.operations = {};
        this.operations.addPlayer = this._addPlayer;
        this.operations.removePlayer = this._removePlayer;
        this.operations.changeTeam = this._changeTeam;
        this.operations.playerDied =this._playerDied;
    }
    _addPlayer(name,teamColor){
        var hero = new Hero(name,teamColor);
        palyers.push(hero);
    }
    _removePlayer(name){
        for (let i = 0; i < palyers.length; i++){
            if (players[i].name == name) {
                palyers[i].living = false;
                players[i].splice(i,1);
            }
        }
    }
    _changeTeam(name,teamColor){
        for(let i = 0; i < players.length; i++){
            console.log("_changeTeam");
            if(teamColor === players[i].teamColor){
                //TODO something
            }
        }
    }
    _playerDied(){}
    ReceiveMessage(){
        var message = Array.prototype.shift.call(arguments);
        this.operations[message].apply(this, arguments);
        return {
            ReceiveMessage : ReceiveMessage
        }
    }
}
var directives = new playDirector();
//玩家类
class Hero{
    constructor(name, teamColor){
        this.name = name;//玩家姓名
        this.living = true;//玩家状态
        this.teamColor = teamColor;//队伍颜色
    }
    win(){
        console.log(`${this.name} win`);
    }
    lose(){
        console.log(`${this.name} lose`);
    }
    die(){
        console.log(`${this.name} die`);
        directives.ReceiveMessage('playerDied',this)
    }
    changeTeam(){
        console.log(`${this.name} changeTeam`)
    }
}
//玩家工厂
class heroFactory{
    constructor(){
    }
    createHero(name, teamColor){
        var hero = new Hero(name, teamColor);
        //给中介发送添加玩家的消息
        directives.ReceiveMessage('addPlayer',this);
        return hero;
    }

}
//中介接收消息
function ReceiveMessage (){}
var heros = new heroFactory(),
    hero1 = heros.createHero('zhangsan','red'),
    hero2 = heros.createHero('lisi','red'),
    hero3 = heros.createHero('wuxin','red'),
    hero4 = heros.createHero('jinxi','green'),
    hero4 = heros.createHero('mengfei','green'),
    hero4 = heros.createHero('caoyi','green');