//实例化vue对象
new Vue({
    el:".vue-app",
    data:{
        name:'hello',
        age:''
    },
    methods:{
        logName:function(){
            console.log("input your name ing")
        },
        logAge:function(){
            console.log("input your age ing")
        },
        getN:function(){
            this.name=this.$refs.name.value;
            //console.log(this.$refs.name.value);
        },
        getA:function(){
            this.age=this.$refs.age.value;
            //console.log(this.$refs.age.value);
        }
    }
});
