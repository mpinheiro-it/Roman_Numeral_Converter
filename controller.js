class Controller{

    constructor(){      
        
        this._numeralField = document.querySelector("#numeral-field");
        this._decimalField = document.querySelector("#decimal-field");

        this.keyboarEvents();
        this.buttonEvent();        

    }

get numeralField(){
    return this._numeralField;
}

set numeralField(value){
    return this._numeralField.value = value;

}

get decimalField(){
    return this._decimalField;
}

set decimalField(value){
    return this._decimalField.value = value;

}


keyboarEvents(){

    //Event listener for decimal number field
    this.decimalField.addEventListener("keyup", () => {

        //obtain the value from the html field
        let number = this.decimalField.value;

        //performs the calculation if the number if minor than 4000
        if(number < 4000){

            this.numberAlertOnOff("none"); //makes the alert disappear   

            this.numeralField = this.convertToRoman(number);

        } else {
            //displays the alert message
            this.numberAlertOnOff("block", "The standard notation only supports numbers up to 3999"); 
                  

        }
    })

    
     //Event listener for roman numeral  field
     this.numeralField.addEventListener("keyup", () => {

        this.numberAlertOnOff("none");
        
        //regex that will validate whether the field has a valid roman numeral
        let regex = /^[MDCLXVI]+$/;
          
        //obtain the value from the html field
        let romanNumeral = this.numeralField.value;

        if (regex.test(romanNumeral)) {            

            this.decimalField = this.convertFromRoman(romanNumeral);

        } else if(romanNumeral != "") {

            //displays the alert message
            this.numberAlertOnOff("block", "Invalid Roman Numeral")

        }        

    })


}



numberAlertOnOff(status, text = "Invalid number"){

   //sets the provided status to the display param of the alert <p>
    document.querySelector("#number-alert").style.display = status;

   //adds the provided text to it
    document.querySelector("#number-alert").innerHTML = text;

    }





buttonEvent(){

    let clearButton = document.querySelector("#clear-button");  
    
    clearButton.addEventListener("click", e => {
        
        this.numeralField = "";
        this.decimalField = "";        

    })

}


convertToRoman(num) {

    //array of objects storing the roman numerals
     let romanNumerals = [
       {number: 1,    numeral: "I"},
       {number: 5,    numeral: "V"},
       {number: 10,   numeral: "X"},
       {number: 50,   numeral: "L"},
       {number: 100,  numeral: "C"},
       {number: 500,  numeral: "D"},
       {number: 1000, numeral: "M"}, 
       //{number: 5000, numeral: "V"},  
    ]
    
    let result = "";
    
    //function that will be used in the filter method below
    function findHighestDecimal(item) {
      return item.number <= num
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

    //fix the generated result so it is
    //in harmony with the roman numeral standards
    function fixResult(result){
        return result.replaceAll("VIIII", "IX")
                     .replaceAll("IIII", "IV")
                     .replaceAll("XXXX", "XL")
                     .replaceAll("LXXXX", "XC")
                     .replaceAll("LXL", "XC")
                     .replaceAll("CCCC", "CD")
                     .replaceAll("DCCCC", "CM")
                     .replaceAll("DCD", "CM")
                     //.replaceAll("MMMM", "MV")
      }
    
    
    return fixResult(result);
    }


convertFromRoman(str){

    return romanToDecimal(str);


    // Returns the value of a Roman symbol
    function value(r) {
        if (r == 'I')
            return 1;
        if (r == 'V')
            return 5;
        if (r == 'X')
            return 10;
        if (r == 'L')
            return 50;
        if (r == 'C')
            return 100;
        if (r == 'D')
            return 500;
        if (r == 'M')
            return 1000;
        return -1;
    }
 

    // Finds decimal value of a
    // given romal numeral
    function romanToDecimal(str) {
        // Initialize result
        var res = 0;
 
        for (let i = 0; i < str.length; i++) {
            // Getting value of symbol s[i]
            var s1 = value(str.charAt(i));
 
            // Getting value of symbol s[i+1]
            if (i + 1 < str.length) {
                var s2 = value(str.charAt(i + 1));
 
                // Comparing both values
                if (s1 >= s2) {
                    // Value of current symbol
                    // is greater or equal to
                    // the next symbol
                    res = res + s1;
                } else {
                    // Value of current symbol is
                    // less than the next symbol
                    res = res + s2 - s1;
                    i++;
                }
            } else {
                res = res + s1;
            }
        }
 
        return res;
    }
 
   
}
    

}



