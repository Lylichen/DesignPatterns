/**
 * 中介模式
 * @description  解除对象与对象之间的耦合
 * @example  三国杀三对三
 * @problem 玩家之间紧紧耦合到一起  利用中介模式解决看实例1-1
 */
class Hero{
    constructor(name,teamColor){
        this.name = name;//姓名
        this.teamColor = teamColor;//区分两队伍
        this.friends = [];//队友
        this.enemies = [];//敌方
        this.living = true;//个人状态
    }
    lose(){
        console.log(this.name + 'lose');
    }
    win(){
        console.log(this.name + 'win');
    }
    die(){
        var all_die = true;
        this.living = false;
        for (let i = 0; i < this.friends.length; i++) {
            if (this.friends[i].living){
                all_die = false;
                break;
            }
        }
        if(all_die){
            this.lose();
            for (let i = 0; i < this.friends.length; i++) {
                this.friends[i].lose();
            }
            for (let j = 0; j < this.enemies.length; j++) {
                this.enemies[j].win();
            }
        }
    }
}

/**
 * 玩家工厂，初始化玩家
 * @description  根据队伍颜色相互填充队友列表以及敌方列表
 */
class init{
    constructor(){
        this.players = [];
    }
    createPlayer(name,teamColor){
        var newPlayer = new Hero(name,teamColor);
        for(let i = 0; i < this.players.length; i++){
            if (newPlayer.teamColor == this.players[i].teamColor){
                newPlayer.friends.push(this.players[i]);
                this.players[i].friends.push(newPlayer);
            }else{
                newPlayer.enemies.push(this.players[i]);
                this.players[i].enemies.push(newPlayer);
            }
        }
        this.players.push(newPlayer);
        return newPlayer;
    }
}

var allplayers = new init(),
    hero1 = allplayers.createPlayer('caocao','red'),
    hero2 = allplayers.createPlayer('lvbu','red'),
    hero3 = allplayers.createPlayer('liuxi','red'),
    hero4 = allplayers.createPlayer('sunquan','green'),
    hero5 = allplayers.createPlayer('zhugeliang','green'),
    hero6 = allplayers.createPlayer('guanyu','green');
hero3.die();
hero2.die();
hero6.die();
hero4.die();
hero1.die();