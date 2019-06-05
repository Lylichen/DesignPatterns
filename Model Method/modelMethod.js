/**
 * 模板模式
 * @description
 * 创建一个抽象类，以及n多个具体类继承该父类
 * @example 面试
 */
class Interview{
    constructor(){
        this.init()
    }
    init(){
        this.writtenTest();
        this.technicalInterview();
        this.leader();
        this.waitNotice();
    }
    writtenTest(){}
    technicalInterview(){}
    leader(){}
    waitNotice(){}
}
class BaiduInterview extends Interview{
    constructor(){
        super()
    }
    writtenTest(){
        console.log("Baidu writtenTest")
    }
    technicalInterview(){
        console.log("Baidu technicalInterview")
    }
    leader(){
        console.log("Baidu leader")
    }
    waitNotice(){
        console.log("Baidu waitNotice")
    }
}
class TencentInterview extends Interview{
    constructor(){
        super()
    }
    writtenTest(){
        console.log("Tencent writtenTest")
    }
    technicalInterview(){
        console.log("Tencent technicalInterview")
    }
    leader(){
        console.log("Tencent leader")
    }
    waitNotice(){
        console.log("Tencent waitNotice")
    }
}
var baiduInterview = new BaiduInterview();
baiduInterview.init();
console.log("---------------我是分割线-------------------")
var tencentInterview = new TencentInterview();
tencentInterview.init();