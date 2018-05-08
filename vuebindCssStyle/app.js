//实例化vue对象
new Vue({
    el:".vue-app",
    data:{
        changeColor:false,
        changeLength:false
    },
    methods:{

    },
    computed:{/*大型内容用*/
        compClass:function(){
            return{
                changeColor:this.changeColor
            }
        }
    }
});
