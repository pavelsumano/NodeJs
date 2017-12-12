function cuenta(arr) {
    //code here
  var arr = str.toLowerCase().split("");
  var x = 0;
  var o = 0;
  for(var i = 0; i < arr.length; i++){
    if (arr[i] == 'x') {
      x = x + 1;
    }
    if (arr[i] == 'o') {
      o = o + 1;
    }                                    
  }
  return x==o;
}

