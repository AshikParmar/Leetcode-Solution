
var ProductOfNumbers = function() {

    // this.product = [];
    
    this.product = [1];
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    // this.product.push(num);
    if(num===0){
        this.product=[1];
    }else{
        this.product.push(this.product[this.product.length-1]*num);
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    // const idx = this.product.length-k;
    // const newArray = this.product.slice(idx);

    // return newArray.reduce((acc,num)=> acc*num ,1);

    const n = this.product.length;
    if(k>=n){
        return 0;
    }
     
    return this.product[n-1] / this.product[n-1-k];
};

 
// Your ProductOfNumbers object will be instantiated and called as such:

const productOfNumbers = new ProductOfNumbers();
productOfNumbers.add(3);
productOfNumbers.add(0);
productOfNumbers.add(2);
productOfNumbers.add(5);
productOfNumbers.add(4);
console.log(productOfNumbers.getProduct(2)); // 20
console.log(productOfNumbers.getProduct(3)); // 40
console.log(productOfNumbers.getProduct(4)); // 0
productOfNumbers.add(8);
console.log(productOfNumbers.getProduct(2)); // 32

 