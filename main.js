var _ = {
   map: function(array,callback) {
     for(var i=0;i<array.length;i++){
       array[i]= callback(array[i])
     }
     return array
   },
   reduce: function(arr,callback,memo) {
     var index=0;
     if(arr.length<1){return false;}
     if(arr.length==1){return arr[0]}
     if(!memo){
       memo=arr[0];
       index=0;
     }
     for(var i=0;i<arr.length;i++){
       memo= callback(arr[i],memo);
     }
     return memo;
   },
   find: function(array,callback) {
     for(var i=0;i<array.length;i++){
       if (callback(array[i])){return array[i]};
     }
   },
   filter: function(array,callback) {
     var out=[];
     for(var i=0;i<array.length;i++){
       if (callback(array[i])){out.push(array[i])}
     }
     return out;
  },
   reject: function(array,callback) {
     var out=[];
      for(var i=0;i<array.length;i++){
        if (!callback(array[i])){out.push(array[i])}
    }
    return out;
    }
}

var map1 = _.map([5,6,7,11], function(num){return num * 4+7;})
var map2 = _.map([5,6,7,11], function(num){return num **3;})
var reduce = _.reduce([5,6,7,11], function(num,memo){return num+memo})
var reduce2 = _.reduce([5,6,7,11], function(num,memo){return num*memo-3})
var find = _.find([5,6,7,11],function(num){if (num==6){return true}})
var find2 = _.find([5,6,7,11],function(num){if (num==8){return true}})
var filter1 = _.filter([5,6,7,11],function(num){if (num%7==0){return num}})
var filter2 = _.filter([5,6,7,11],function(num){if (num>6){return num}})
var reject1 = _.reject([5,6,7,11],function(num){if (num%7==0){return num}})
var reject2 = _.reject([5,6,7,11],function(num){if (num==8){return num}})

console.log(map1) //--> [27, 31, 35, 51]
console.log(map2) //--> [125,216,343, 1331]
console.log(reduce) //--> 34
console.log(reduce2) //--> 9897
console.log(find) //--> 6
console.log(find2) //--> undefined
console.log(filter1) //--> [7]
console.log(filter2) //--> [7,11]
console.log(reject1) //--> [5,6,11]
console.log(reject2) //--> [5,6,7,11]
