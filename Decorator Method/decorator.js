//装饰模式，在不改变某个对象的前提下，动态添加属性和方法
//之前执行
Function.prototype.before = function(beforefn){
    var __self = this;
    return function(){
        beforefn.apply(this,arguments);
        return __self.apply(this,arguments);
    }
}
//之后执行
Function.prototype.after = function(afterfn){
    var __self = this;
    return function(){
        var ret = __self.apply(this.arguments);
        afterfn.apply(this,arguments);
        return ret;
    }
}