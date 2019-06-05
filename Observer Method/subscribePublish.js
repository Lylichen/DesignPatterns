/**
 * @function:订阅/发布者模式
 * 
 */
var subscribePublish = function(){
    var __messages = {};
    return {
        register:function(type,fn){
            if(!__messages[type]){
                __messages[type] = [fn];
            }else{
                __messages[type].push(fn);
            }
        },
        trigger:function(type,fn){
            if(!__messages[type]){
                return ;
            }
            for(var i = 0; i < __messages[type].length; i++){
                __messages[type].apply(this,arguments);
            }
        },
        remove:function(type,fn){
            if(!__messages[type]){
                return ;
            }
            var i = __messages[type].length;
            for(; i >= 0; i--){
                __messages[type].splice(i,1)
            }
        }
    }
}
var fn = function(data){
    console.log(data + '的推送信息：------------------');
};
subscribePublish().register('test');
subscribePublish().trigger('test');
subscribePublish().remove('test');