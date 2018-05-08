//实例化vue对象
new Vue({
    el:".vue-app",
    data:{
        a:0,
        b:0,
        age:20
    },
    methods:{
/*        dealAddA:function(){
            return(this.a + this.age);
        },
        dealAddB:function(){
            return(this.b + this.age);//性能
        },*/
    },
    computed:{/*大型内容用*/
        dealAddA:function(){
            return(this.a + this.age);
            console.log("fion1");
        },
        dealAddB:function(){
            return(this.b + this.age);
            console.log("fction2");
        },        
    }
});
