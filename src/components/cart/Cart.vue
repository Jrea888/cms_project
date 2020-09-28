<template>
<div class="tmpl">
    <nav-bar title="购物车"></nav-bar>
    <div class="pay-detail">
        <ul>
            <li v-for="(item,index) in shopsInfo" :key="index" class="p-list">
                <mt-switch v-model="item.isChecked.isChecked"></mt-switch>
                <img :src="item.image">
                <div class="pay-calc">
                    <p v-text="item.title"></p>
                    <div class="calc">
                        <span>￥{{item.price}}</span>
                        <span @click="sub(index)">-</span>
                        <span style="width:auto">{{item.shopNum.shopNum}}</span>
                        <span @click="add(index)">+</span>
                        <a href="javascript:;" @click="del(index)">删除</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="show-price">
        <div class="show-1">
            <p>总计(不含运费):</p>
            <span>已经选择商品{{payment.num}}件，总价￥{{payment.sum}}元</span>
        </div>
        <div class="show-2">
            <mt-button type="danger" size="large">去结算</mt-button>
        </div>
    </div>
</div>
</template>

<script>
import prodTools from '../../components/common/prodTool.js'
import connect from '../common/connect';
export default {
    name:'Cart',
    data(){
        return{
            goodsList:[],
            isChecked:true, 
            prodsId:[], // 储存货物Id
            shopsInfo:[]
        }
    },
    created(){
        // 获取localStorage中的数据
        let prods = prodTools.getGoods(); 
        console.log(Object.keys(prods));
        this.prodsId = Object.keys(prods);
        // 根据id请求商品数据
        this.prodsId.forEach(item => {
            this.$axios.get('detail?iid='+item)
            .then(res => {
                let goodsObj = {};
                goodsObj.title = res.data.result.itemInfo.title;
                goodsObj.id = res.data.result.itemInfo.iid;
                goodsObj.price = res.data.result.itemInfo.lowPrice; 
                goodsObj.image = res.data.result.itemInfo.topImages[0];  
                goodsObj.isChecked = {};
                goodsObj.shopNum = {};
                // 在vue中添加属性，是没有办法做到响应，setter
                this.$set(goodsObj.isChecked,'isChecked',true);
                this.$set(goodsObj.shopNum,'shopNum',prods[item]);
                this.shopsInfo.push(goodsObj);
            })
            .catch(err => {
                console.log(err);
            }) 
        })
    },
    computed:{
        payment(){
            let sum = 0;
            let num = 0;
            this.shopsInfo.forEach(item => {
                sum += item.shopNum.shopNum * item.price;
                num += item.shopNum.shopNum;
            }) 
            sum = sum.toFixed(2);
            return {
                num,sum
            }
        }
    },
    methods:{
        sub(i){
            if( this.shopsInfo[i].shopNum.shopNum <= 1 ) return;
            this.shopsInfo[i].shopNum.shopNum--; 
            // 改变 购物车 和 存储的加 1
            connect.$emit("addNum",-1);
            prodTools.addGoods({
                id:this.shopsInfo[i].id,
                num:-1
            });
        },
        add(i){
            this.shopsInfo[i].shopNum.shopNum++;
            // 改变 购物车 和 存储的加 1
            connect.$emit("addNum",1);
            prodTools.addGoods({
                id:this.shopsInfo[i].id,
                num:1
            });
        },
        del(i){
            // 删除内存 在删除storage 再删除 下面的number
            let currentGoods = this.shopsInfo[i];
            prodTools.deleteGoods(this.shopsInfo[i].id);
            // 删除下面的number
            connect.$emit('addNum',-currentGoods.shopNum.shopNum);
            // 删除内存
            this.shopsInfo.splice(i,1);
        }
    }   
}
</script>

<style scoped>
.pay-detail ul li {
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 3px;
}

.pay-detail ul {
    padding-left: 5px;
    margin-top: 5px;
}

.pay-detail ul li img {
    width: 80px;
    height: 80px;
    display: inline-block;
    vertical-align: top;
    margin-top: 10px;
}

.pay-detail ul li >:nth-child(1),
.pay-detail ul li >:nth-child(3) {
    display: inline-block;
}

.pay-calc p {
    display: inline-block;
    width: auto;
    overflow: hidden;
    color: blue;
    font-size: 15px;
    margin-bottom: 10px;
}

.pay-detail ul li >:nth-child(1) {
    line-height: 80px;
}

.calc:nth-child(1) {
    color: red;
    font-size: 20px;
}

.calc span:not(:nth-child(1)) {
    border: 1px solid rgba(0, 0, 0, 0.3);
    display: inline-block;
    width: 20px;
    text-align: center;
}

.calc a {
    margin-left: 20px;
}

.show-1,
.show-2 {
    display: inline-block;
}

.show-1,
.show-2 {
    margin-left: 30px;
}

.show-price {
    background-color: rgba(0, 0, 0, 0.2);
}
</style>