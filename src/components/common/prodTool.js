let prodTools = {};
let store = window.localStorage;
// 储存货物数据  将来从localstorage获取
let prods = JSON.parse(store.getItem('prods') || '{}');
/**
 * 新增货物， id 和 num 
 * { id: this.id, num:this.num }
 */
prodTools.addGoods = function(params){
    if(prods[params.id]){
        // 判断商品是否存在，如果存在，追加
        prods[params.id] += params.num;
    }   // 否则 新增数据
    else {
        prods[params.id] = params.num;
    }  
    console.log(prods);
    // 保存
    this.save(prods);
}
/**
 * 获取商品
 */
prodTools.getGoods = function(){
    return JSON.parse(store.getItem('prods') || '{}');
}

/**
 * 删除商品
 */
prodTools.deleteGoods = function(id){
    delete prods[id];
    // 保存
    this.save(prods);
}

/**
 * 获取商品总数
 */
prodTools.getTotal = function(){ 
    let sum = 0;
    for(let id in prods){
        sum += prods[id]
    }
    return sum;
}

/**
 * 保存
 */
prodTools.save = function(goods){
    console.log(prods)
    store.setItem('prods',JSON.stringify(goods));
}

export default prodTools;