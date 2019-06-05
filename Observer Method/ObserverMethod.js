//观察者模式
var Event = {
    //通过on接口监听事件eventName
    //通过事件eventName被处罚，则执行callback回调函数
    on: function (eventName, callback) {
        this.handler = this.handler ? this.handler : {};
        this.handler[eventName] = this.handler[eventName] ? this.handler[eventName] : []
        this.handler[eventName].push(callback);
    },
    //触发事件eventName
    emit: function (eventName) {
        console.log("ceshi---"+this.handler[eventName])
        if(!this.handler[eventName]){
            return false
        }else{
            for(var i = 0; i<this.handler[eventName].length; i++){
                this.handler[eventName][i](arguments[i])
            }
        }
    }
}

//测试
// Event.on('test', function (){
//     console.log("test");
// });
// Event.on('test', function (result){
//     console.log(result);
// });
// Event.emit('test', 'hello world');

var person1 = {};
var person2 = {};
Object.assign(person1, Event);
Object.assign(person2, Event);
person1.on('call1', function(){
    console.log('person1')
});
person2.on('call2',function(){
    console.log('person2')
})
person1.emit('call1');
person1.emit('call2');
person2.emit('call1');
