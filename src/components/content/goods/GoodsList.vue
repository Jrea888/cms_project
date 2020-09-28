<template>
   <div class="tmpl" style="height: 577px; overflow: hidden;overflow-y: auto;">
        <nav-bar title="商品列表" ></nav-bar> 
        <!-- 上啦完毕调用该元素的onBottomLoaded函数， --> 
        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="isAutoFill" ref="loadmore">
            <ul class="mui-table-view mui-grid-view">
                <li v-for="(item,index) in goodsList" :key="index" class="mui-table-view-cell mui-media mui-col-xs-6">
                    <router-link :to="{name:'goods.detail',params:{id:item.id}}">
                        <img class="mui-media-object" v-lazy="item.image">
                        <div class="mui-media-body">{{item.title}}</div>
                        <div class="desc">
                            <div class="sell">
                                <span>￥{{item.price}}</span>
                            </div>
                            <div class="detail">
                                <div class="hot">
                                    热卖中
                                </div>
                                <div class="count">
                                    剩最后10件
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul> 
        </mt-loadmore>
    </div>
</template>

<script>
export default {
    name:'GoodsList',
    data(){
        return{
            indexPage:1,
            goodsList:[],
            allLoaded:false, //是否禁止触发上拉函数
            isAutoFill:false,//是否自动触发上拉函数
        }
    },
    created(){
        this.loadMore();
    },
    methods:{
        loadMore(){
            this.$axios.get("home/data?type=pop&page="+this.indexPage)
            .then(res => { 
                let arr = res.data.data.list; 
                arr.forEach(element => { 
                    const objData = {
                        id:element.iid,
                        image:element.show.img,
                        title:element.title,
                        price:element.orgPrice
                    }
                    this.goodsList.push(objData);
                }); 
                console.log(this.goodsList);
            })
            .catch(err => {
                console.log(err);
            });
        },
        loadBottom(){
           console.log('上啦触发了'); 
           this.loadmoreConcat();
        },
        loadmoreConcat(){
            this.$axios.get("home/data?type=pop&page="+(++this.indexPage))
            .then(res => { 
                let arr = res.data.data.list;  
                arr.forEach(element => { 
                    const objData = {
                        id:element.iid,
                        image:element.show.img,
                        title:element.title,
                        price:element.orgPrice
                    }
                    this.goodsList.push(objData);
                }); 
                // 追加内容
                // this.goodsList = this.goodsList.concat(this.goodsList);
                if(res.data.data.list.length != 30){
                    // 数据不足30条，就停止下一次刷新
                    this.allLoaded = true; // 为 true 禁止调用上拉函数
                } 
                // 通知上拉已经操作完成
                this.$refs.loadmore.onBottomLoaded();
            })
            .catch(err => {
                console.log(err);
            });
        }
    }    
}
</script>

<style scoped>
.mui-table-view.mui-grid-view .mui-table-view-cell > a:not(.mui-btn) {
    margin: 0px;
    padding: 0px;
    border: 1px solid #5c5c5c;
    box-shadow: 0 0 4px #666;
}

.sell > span {
    float: left;
    color: red;
    text-align: left;
}

.detail >.hot {
    float: left;
    text-align: left;
    font-size: 15px;
}

.detail >.count {
    float: right;
    text-align: right;
    font-size: 15px;
}

/*撑开，去除浮动没有的高度*/
.detail {
    overflow: hidden;
}

.desc {
    color: rgba(92, 92, 92, 0.8);
    background-color: rgba(0, 0, 0, 0.2);
}

.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
    height: 200px;
}

.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    margin: 8px 2px;
}
</style>