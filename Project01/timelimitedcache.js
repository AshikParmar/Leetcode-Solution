var TimeLimitedCache = function() {
    this.cache = new Object;
};


/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
   let found = key in this.cache;

   if(found){
    clearTimeout(this.cache[key].ref);
   }

   this.cache[key] = {value , ref: setTimeout(()=>{ delete this.cache[key] },duration)};

   console.log(found);
   return found;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    console.log(key in this.cache ? this.cache[key].value : -1);
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    console.log(Object.keys(this.cache).length);
};


  const timeLimitedCache = new TimeLimitedCache()
  timeLimitedCache.set(1, 42, 1000); // false
  timeLimitedCache.get(1) // 42
  timeLimitedCache.count() // 1
 
