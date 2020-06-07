var arr = ["Yaakov","John","jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];

for(i in arr) {
  if(arr[i][0]==='j' || arr[i][0]==="J"){
    goodBye(arr[i]);
  }
  else {
    hello(arr[i]);
  }
}
