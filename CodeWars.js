function convert(str) {
   for(var i = 0; i < 99; i++){
      str[i] = str[i].split('');
      if (str[i][0] !== undefined) {
         str[i][0] = str[i][0].toUpperCase();
      }
      str[i] = str[i].join('');
   }
   return str;
}


// Cuenta las X / O x / o
function XO(str) {
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

// high & low

point = "5 29 54 4 0 -214 542 -64 1 -3 6 -6";
	var points = point.split(" ");
    var aux = 0;
	arr = points.map(function(i){
    return parseInt(i, 10);
})
	arr.sort();
    aux = parseInt(arr[0], 10);
    for(var i = 0; i < arr.length; i++){
        if (aux < arr[i]) {aux = arr[i];}  
  	}
    


order G KG T

function arrange(arr){
  //Insert code here
  for (i = 0; i <= arr.length-1; i++){
    var tm = arr[i];
    var x = tm.split("  ");
    console.log("x"+i+" -> " + x);
  }
  return arr.sort();


}

function arrange(arr){
  //Insert code here
  for (i = 0; i <= arr.length-1; i++){
    var tm = arr[i];
    var x = tm.split(/(\D)/);
    console.log("x"+i+" -> " + x);
  }
  return arr.sort();
}

function arrange(arr){
  //Insert code here
  var result = [];
  var result2 = [];
  var result3 = [];

  for (i = 0; i <= arr.length-1; i++){
    var x = arr[i].split(/(\D)/);
    if (x[1] == "G") {
      result.push(arr[i]);
    }
  }
  result.sort();

  for (i = 0; i <= arr.length-1; i++){
    var x = arr[i].split(/(\D)/);
    if (x[1] == "K") {
      result2.push(arr[i]);
    }
  }
  result2.sort();

  for (i = 0; i <= arr.length-1; i++){
    var x = arr[i].split(/(\D)/);
    if (x[1] == "T") {
      result3.push(arr[i]);
    }
  }
  result3.sort();

  result = result.concat(result2, result3);
  return result;
}


