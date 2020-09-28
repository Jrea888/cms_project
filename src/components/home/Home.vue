<template>
    <div> 
        <div class="swiperImg">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(item,index) in imgList" :key="index">
                    <img :src="item.image" alt="">    
                </mt-swipe-item> 
            </mt-swipe>
        </div>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link :to="{name:'newslist'}">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link :to="{name:''}">
                        <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                        <div class="mui-media-body">图文分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link :to="{name:'goodslist'}">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品展示</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link :to="{name:''}">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link :to="{name:''}">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">搜索资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link :to="{name:''}">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div>
                    </router-link>
                </li>
            </ul> 
		</div>
    </div>
</template>

<script>

export default {
    name:'Home',
    data(){
        return {
            imgList:[]
        }
    },
    created(){
        this.$axios.get('home/multidata')
        .then((result) => { 
            this.imgList = result.data.data.banner.list;
        }).catch((err) => {
            console.error(err);
        });
    } 
}
</script>

<style scoped>
.swiperImg{
    height: 200px;
}
.swiperImg img{
    width: 100%; 
}
/* 九宫格 */
.mui-grid-view.mui-grid-9{
    background: white;
}
.mui-content>.mui-table-view:first-child{
    margin: 0;
}
.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before{
    content: "";
}
.mui-icon-home {
    background-image: url('../../static/img/news.png');
    background-repeat: round;
}
.mui-icon-email{
    background-image: url('../../static/img/picShare.png');
    background-repeat: round;
}
.mui-icon-chatbubble{
    background-image: url('../../static/img/goodShow.png');
    background-repeat: round;
}
.mui-icon-location{
    background-image: url('../../static/img/feedback.png');
    background-repeat: round;
}
.mui-icon-search{
    background-image: url('../../static/img/search.png');
    background-repeat: round;
}
.mui-icon-phone{
    background-image: url('../../static/img/callme.png');
    background-repeat: round;
}
.mui-icon-home,
.mui-icon-email,
.mui-icon-chatbubble,
.mui-icon-location,
.mui-icon-search,
.mui-icon-phone{
    height: 50px;
    width: 50px;
}

</style>