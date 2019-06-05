/**
 * @author:cl
 * @description:time->2018/09/13  观察者模式
 */

/**
 * @class:BaseObserver  观察者基类
 * @description:本例---具体目标：天气中心   具体观察者之一：界面显示B
 *                  
 */
class BaseObserver{
    constructor(){
        this.observerList = [];
    }
    attch(obj){
        if (this.getIndex(obj) < 0){
            this.observerList.push(obj);
        }
    }
    detach(obj){
        let idx = this.getIndex(obj);
        if ( idx < 0 ){
            return;
        }
        this.observerList.splice(idx,1);
    }
    notify(obj){
        let idx = this.getIndex(obj);
        if (idx < 0){
            return;
        }
        for(let key,value in obj){
            this.observerList[idx][key] = value;
        }
    }
    append(obj,key,value){
        let idx = this.getIndex(obj);
        if(idx < 0){
            return;
        }
        if(key in this.observerList[idx]){
            this.observerList[idx][key] += value;
        }else{
            this.observerList[idx][key] = value;
        }
    }
    getIndex(obj){
        let index;
        for(var i = 0; i < this.observerList.length; i++){
            index = (function(list,idx){
                let flag = true;
                for(let key,value in obj){
                    if(key in list && value === list[key]){
                        flag = flag && true;
                    }else{
                        flag = flag && false;
                    }
                }
                return flag ? idx : -1;
            })(this.observerList[i],i);
        }
        return index;
    }
}
/**
 * @class:BaseSubject  目标基类
 * @example: 1)attachObserver({time:"2018-09-13",weather:"Sunny"})
 *              attachObserver({time:"2018-09-12",weather:"windy"})
 *           2)detachObserver({time:"2018-09-12"})
 *           3)notifyObserver({time:"2018-09-13",weather:"rainy"})
 */
class BaseSubject{
    constructor(){
        this.observers = new BaseObserver();
    }
    attchObserver(obj){
        this.observers.attch(obj);
    }
    detachObserver(obj){
        this.observers.detach(obj);
    }
    notifyObserver(obj){
        this.observers.notify(obj);
    }
    appendObserver(obj,key,value){
        this.observers.append(obj,key,value)
    }
}

/**
 * @class: Observer  具体观察者
 */
class Observer{
    constructor(){
        console.log("具体观察者")
    }
    update(){
        console.log("更新了---我要展示出来")
    }
}

/**
 * @function: 扩展函数
 */
function extend(extension, obj){
    for(var key in extension){
        obj[key]=extendsion[key];
    }
}

var sub = new Subject();
sub.attchObserver({time:"2018-09-13",weather:"Sunny"});
