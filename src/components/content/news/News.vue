<template>
    <div class="tmpl"> 
        <nav-bar title="新闻列表"></nav-bar>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item,index) in newLists" :key="index">
                <router-link :to="{name:'newsdetail',params:{id:item.id}}">
                    <img class="mui-media-object mui-pull-left" v-lazy="item.image">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>{{item.price}}</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name:'News',
    data(){
        return{
            newLists:[]
        }
    },
    created(){
        this.$axios.get("home/data?type=new&page=1")
        .then(res => { 
            let arr = res.data.data.list; 
            arr.forEach(element => { 
                const objData = {
                    id:element.iid,
                    image:element.show.img,
                    title:element.title,
                    price:element.orgPrice
                }
                this.newLists.push(objData);
            }); 
        })
        .catch(err => {
            console.log(err);
        });
    } 
}
</script>
<style scoped>
.mui-table-view .mui-media-object{
    height: auto;
}
.mui-media-body {
    white-space: normal;
}
</style>