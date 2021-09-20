function convertToRoman(num) {
//array of objects storing the roman numerals
 let romanNumerals = [
   {number: 1,    numeral: "I"},
   {number: 5,    numeral: "V"},
   {number: 10,   numeral: "X"},
   {number: 50,   numeral: "L"},
   {number: 100,  numeral: "C"},
   {number: 500,  numeral: "D"},
   {number: 1000, numeral: "M"}, 
   {number: 5000, numeral: "V"},  
]

let result = "";

//function that will be used in the filter method below
function findHighestDecimal(item) {
  return item.number <= num
}

//function used to fix the generated result so it is
//in harmony with the roman numerals standards
function fixResult(result){
  return result.replace("VIIII", "IX")
               .replace("IIII", "IV")
               .replace("XXXX", "XL")
               .replace("LXXXX", "XC")
               .replace("LXL", "XC")
               .replace("CCCC", "CD")
               .replace("DCCCC", "CM")
               .replace("DCD", "CM")
               .replace("MMMM", "MV")
}

 //iterate over "num" replacing values by their respective roman numerals
 //until it reaches the value of zero
 while (num > 0) {

   //finds the highest decimal closer to "num" and obtain its roman numeral
   result += romanNumerals
                    .filter(findHighestDecimal)
                    .pop()
                    .numeral
  
  //subtracting the replaced value from "num"
   num = num - romanNumerals
                    .filter(findHighestDecimal)
                    .pop()
                    .number
 }


return fixResult(result);
}

console.log(convertToRoman(798));
