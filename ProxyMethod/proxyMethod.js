/**
 * 代理模式
 * @function:本体函数
 */
var mainFunc = function(ids){
    console.log(ids);
}
/**
 * @function:代理函数
 */
var proxyFunc = (function(){
    var cache = [],
        timer = null;
    return function(checkboxs){
        if(timer){
            return;
        }
    }
})();