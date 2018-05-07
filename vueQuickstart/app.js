//实例化vue对象
new Vue({
    el:".vue-app",
    data:{
        name:"hqy",
        age:"21",
        github:"https://www.github.com",
        git:"<a href='https://github.com/QingyiHuang'>qingyi</a>"
     },
    methods:{//方法
          //等价于 this.name san 是 this.data.name
        greet: function(time){//自定义方法 可以传值
            return 'hello vue this time is '+ time +" "+this.name+'!!!';//调用方法直接写
        }
    }
});
/*el :element 需要获取的元素，一定要是html中的根容器元素 类比san的闭合div 
*以index中 div.vue-app为例子
*data:用于数据的存储 类似initData()
*
*/