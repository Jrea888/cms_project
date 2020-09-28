<template>
    <div>
        <nav-bar title="商品详情" ></nav-bar> 
        <div class="swiperImg">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(item,index) in imgList" :key="index">
                    <img :src="item" alt="">    
                </mt-swipe-item> 
            </mt-swipe>
        </div>

        <div class="product-desc">
            <ul>
                <li>
                    <span class="product-desc-span">{{shopTitle}}</span>
                </li>
                <li class="price-li">
                    市场价：<s>￥{{marketPrice}}</s> 销售价：<span>￥{{buyPrice}}</span>
                </li>
                <li class="number-li">
                    购买数量：<span @click="substract">-</span>
                    <span>{{num}}</span><span @click="add">+</span> 
                </li> 
                <li>
                    <mt-button  type="primary" @click="addShopcart">添加到购物车</mt-button> 
                    <mt-button  type="danger">立即购买</mt-button> 
                </li>
            </ul>
        </div> 
        <div class="product-props">
            <ul>
                <li>商品参数</li>
                <li v-for="(item,index)  in shopParams" :key="index" > 
                    <div>{{item.key}} ：{{item.value}}</div> 
                </li> 
            </ul>
        </div>
        <div class="product-info">
            <ul>
                <li>
                    <mt-button type="primary" size="large" plain >图文介绍</mt-button>
                </li>
                <li>
                    <mt-button type="danger" size="large" plain >商品评论</mt-button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// Vue 中组件通信对象
import connect from '../../common/connect.js';
import prodTools from '../../common/prodTool.js'
export default {
    name:'GoodsDetail',
    data(){
        return {
            id:'',
            num:0,
            shopTitle:"",
            marketPrice:0,
            buyPrice:0,
            shopParams:[],
            isShow:true,
            imgList:[]
        }
    },
    created(){
        console.log(this.$route.params.id,"获取流行-IID");
        this.id = this.$route.params.id;
        this.$axios.get('detail?iid='+this.id)
        .then(res => {
            console.log(res.data.result.itemInfo.topImages);
            console.log(res.data);  
            // 获取参数信息
            this.imgList = res.data.result.itemInfo.topImages;
            this.shopTitle = res.data.result.itemInfo.title; 
            this.marketPrice = res.data.result.itemInfo.highNowPrice; 
            this.buyPrice = res.data.result.itemInfo.highPrice; 
            this.shopParams = res.data.result.itemParams.info.set;
        })
        .catch(err => {
            console.log(err);
        })
    },
    methods:{
        afterEnter(){
            
        },
        substract(){
            if(this.num <= 0) return
            this.num--;
        },
        add(){
            // 货品数量自加
            // if() 正加的值是否大于库存
            this.num++;
        }, 
        addShopcart(){
            connect.$emit("addNum",this.num);
            // 调用 prodTools 对象新增商品
            prodTools.addGoods({
                id:this.id,
                num:this.num
            });
            // 查看
            // console.log(prodTools.getGoods());
            // console.log(prodTools.getTotal());
        }
    }
}
</script>

<style scoped>
.swiperImg{
    height: 200px;
    margin: 10px;
    border: 1px solid #2de26a66;
    border-radius: 5px;
}
.swiperImg img{
    width: 100%; 
    border-radius: 5px;
}

.mint-button--normal{
    display: inline-block;
    padding: 0 12px;
    height: 27px;
    font-size: 16px;
}

.swiper {
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 8px;
    width: 95%;
    border-radius: 15px;
    overflow: hidden;
}

.outer-swiper,
.product-desc,
.product-props,
.product-info {
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 3px;
}


/*请ulpadding*/

.outer-swiper ul,
.product-desc ul,
.product-props ul,
.product-info ul {
    padding: 0;
}

.product-desc ul li,
.product-props ul li,
.product-info ul li {
    list-style: none;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 8px;
}

.product-desc ul >:nth-child(1) span {
    color: blue;
    font-size: 22px;
    font-weight: bold;
}

.product-desc ul >:nth-child(1) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}

.product-desc ul,
.product-info ul,
.product-props ul {
    padding-left: 10px;
}

.price-li span {
    color: red;
    font-size: 25px;
}

.price-li s {
    margin-right: 16px;
}


/*加减*/

.number-li span {
    display: inline-block;
    border: 2px solid rgba(0, 0, 0, 0.1);
    width: 25px;
}


/*商品参数*/

.product-props ul >:nth-child(1) {
    text-align: left;
}

.product-props ul:not(:nth-child(1)) {
    margin-left: 40px;
}

.product-info ul {
    margin-bottom: 70px;
    padding: 0 5;
}

.number-li span {
    text-align: center;
}

.number-li >:nth-child(2) {
    width: 40px;
}

.ball {
    border-radius: 50%;
    background-color: red;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 440px;
    left: 120px;
    display: inline-block;
    z-index: 9999;
} 
</style>