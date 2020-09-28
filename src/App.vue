<template>
    <div> 
        <mt-header title="商城信息管理"></mt-header>
		<transition name="router" mode="out-in">
        	<router-view></router-view> 
		</transition>   

        <nav class="mui-bar mui-bar-tab">
			<router-link :to="{name:'home'}" class="mui-tab-item" >
				<span class="mui-icon icon-shouye"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link :to="{name:'member'}" class="mui-tab-item" >
				<span class="mui-icon icon-ziyuan"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link :to="{name:'cart'}" class="mui-tab-item" >
				<span class="mui-icon icon-gouwuchezhengpin">
					<span class="mui-badge">{{pickNum}}</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link :to="{name:'search'}" class="mui-tab-item" >
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
import connect from './components/common/connect.js';
import prodTools from './components/common/prodTool.js';
    export default {
        name:'App',
        data(){
            return {
           		pickNum:prodTools.getTotal()
            }
	   },
	   created(){
		// 使用箭头函数 为了 this是向上层查找
		connect.$on("addNum",num => {
			this.pickNum += num;
		});
	   }
    }
</script>

<style scoped>
.router-enter-active,.router-leave-active {
	transition: opacity .5s;
}
.router-enter,.router-leave-to{
	opacity: 0;
} 
</style>