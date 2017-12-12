    function reverseString(str) {
        // Step 1. Use the split() method to return a new array
        var splitString = str.split(""); // var splitString = "hello".split("");
        // ["h", "e", "l", "l", "o"]
     
        // Step 2. Use the reverse() method to reverse the new created array
        var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
        // ["o", "l", "l", "e", "h"]
     
        // Step 3. Use the join() method to join all elements of the array into a string
        var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
        // "olleh"
        
        //Step 4. Return the reversed string
        return joinArray; // "olleh"
    }
    // same functiom but, together
    function reverseString2(str) {
        return str.split("").reverse().join("");
    }

function reverseString3(str) {
    var newString = ""; // Create an empty string that will host the new created string
    var palabras = str.split(" "); //Step 0. dividir la linea en palabras
    for(var j = 0; j <= palabras.length-1; j++){
        var tem = palabras[j].split("");
        // Step 2. Create the FOR loop
        for (var i = tem.length - 1; i >= 0; i--) { 
             newString += tem[i]; // or newString = newString + str[i];
        }
        newString = newString + " ";
     }
    // Step 3. Return the reversed string
    return newString; // "olleh"
}

// var cadena1 = "El veloz murciélago hindú comía feliz cardillo y kiwi"
// var cadena2 = "La cigüeña tocaba el saxofón"
// var cadena3 = "detrás del palenque de paja" 

var cadena4 = `El veloz murciélago hindú comía feliz cardillo y kiwi.
La cigüeña tocaba el saxofón 
detrás del palenque de paja`;
var cadena = "RemoteIo is awesome \n Candidates pass interview \n best candidates are selected"

console.log(cadena4);
var str = cadena4.split('\n');
   for(var i = 0; i < str.length; i++){
        console.log( reverseString3(str[i]));
    }


//console.log( reverseString2(cadena2));

//console.log( reverseString3(cadena3));

