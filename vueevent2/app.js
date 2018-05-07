//实例化vue对象
new Vue({
    el:".vue-app",
    data:{
        age:18,
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
        }
    }
});
