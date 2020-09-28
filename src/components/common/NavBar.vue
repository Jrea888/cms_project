<template>
    <div>
		<header class="mui-bar mui-bar-nav">
			<a @click="goBack" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">{{title}}</h1>
		</header>
    </div>
</template>

<script>
export default {
    name:'NavBar',
    data(){
        return {

        }
    },
    props:{
        title:{
            type:String,
            default:"标题"
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.mui-bar.mui-bar-nav{
    position: relative;
}
</style>