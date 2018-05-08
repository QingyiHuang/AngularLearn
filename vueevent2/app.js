//实例化vue对象
new Vue({
    el:".vue-app",
    data:{
        age:18,
        x:0,
        y:0,
    },
    methods:{
        add:function(){
            this.age++;
        },
        rm:function(){
            this.age--;
        },
        rmx:function(num){
            this.age-=num;
        },
        updateXY:function(e){//鼠标事件  v-on: 等价于 @
            this.x=e.offsetX;
            this.y=e.offsetY;
        },
        stopMove:function(e){
            e.stopPropagation();
        },
        alert:function(){
            alert("hello vue");//to prevent jump
        }
    }
});
