<template> 
    <div class="tmpl">
        <nav-bar title="新闻内容页"></nav-bar>
        <div class="news-title">
            <p>{{title}}</p> 
        </div> 
        <!-- <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li v-for="(item,index) in imgs"  :key="index"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <vue-preview :slides="imgs"></vue-preview> 
            </li>
        </ul> --> 
        <!-- 单独写css文件引入 -->
        <div class="thumbs">
            <vue-preview :slides="imgs" ></vue-preview>  
        </div>
        
    </div> 
</template>

<script>

export default {
    name:'NewsDetail',
    data(){
        return{
            iid:"",
            title:"",
            topImages:[],
            imgs:[]
        }
    },
    created(){
        console.log(this.$route.params.id,"获取最新-IID");
        this.iid = this.$route.params.id;
        this.$axios.get('detail?iid='+this.iid)
        .then(res => { 
            this.title = res.data.result.itemInfo.title;
            this.topImages = res.data.result.itemInfo.topImages; 
            this.topImages.forEach(ele => {
                const objImg = {};
                objImg.src = ele;
                objImg.msrc = ele;
                objImg.h = 480; // 显示缩略图的高
                objImg.w = 350;
                this.imgs.push(objImg);
            });
        })
        .catch(err => {
            console.log(err);
        });
    },
    methods:{ 

    }  
}
</script>
<style scoped>
.news-title p {
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin: 10px 0;
} 
</style>
