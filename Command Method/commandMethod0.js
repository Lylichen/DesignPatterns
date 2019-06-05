/**
 * 按钮事件
 * @description 
 * 传入按钮以及事件，当传入的按钮被点击时触发执行传入的事件
 */
var btn0 = document.querySelector('#btn1'),
    btn1 = document.querySelector('#btn2'),
    btn2 = document.querySelector('#btn3'),
    btn4 = document.querySelector('#btn4')
var btnEvent = function(button,fun){
    button.onclick = fun();
}
eventType = {
    add:function(){
        alert("add");
    },
    reduce:function(){
        alert("reduce")
    },
    exit:function(){
        alert("exit")
    },
    edit:function(){
        alert("edit")
    },
    submit:function(){
        alert("submit")
    },
    reset:function(){
        alert("reset")
    }
}
eventType(btn0,eventType.add);
eventType(btn1,eventType.exit);
eventType(btn2,eventType.reset);
eventType(btn3,eventType.submit);