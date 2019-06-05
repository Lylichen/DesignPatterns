/**
 * 策略模式
 * @description  
 * 定义一系列算法，把它们一个个封装起来，并且使它们可以相互替换
 * 分为两部分：策略类、环境类
 */

 //策略类
var calculate = function(salary, y){
    if (!y){
        return;
    }
    if (!salary){
        return;
    }
    return Number(salary) * Number(y)
}
function obj(salary){
    return {
        'A':calculate(salary,4),
        'B':calculate(salary,3),
        'C':calculate(salary,2)
    }
}
//环境类
class Person{
    constructor(name,salary,cls){
        this.name = name;
        this.salary = salary;
        this.cls = cls;
        this.calculate = obj(salary)[cls];
    }
    toString(){
        console.log(`${this.name}'s salary is ${this.salary},his salary cls is ${this.cls},so his prise is ${this.calculate}`)
    }
}
var xiaoming = new Person('xiaoming','5000','C');
xiaoming.toString();