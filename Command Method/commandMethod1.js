/**
 * 命令模式--宏命令
 * @description
 * 利用宏命令统一控制方法的添加以及执行,可以统一执行添加到命令集中的所有命令
 */
class command{
    constructor(){
        this.commandlist = [];
    }
    add(command){
        this.commandlist.push(command);
    }
    excude(){
        for(let i = 0; i < this.commandlist.length; i++){
            this.commandlist[i].excude();
        }
    }
}

let command1 = {
    excude:function(){
        console.log("command1");
    }
}
let command2 = {
    excude:function(){
        console.log("command2");
    }
}
let command3 = {
    excude:function(){
        console.log("command3");
    }
}
var commanexam = new command();
commanexam.add(command1)
commanexam.add(command2)
commanexam.add(command3)
commanexam.excude();