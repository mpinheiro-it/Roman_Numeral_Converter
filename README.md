# Roman_Numeral_Converter

**update 22/12/2021**

Created a simple web app using HTML / CSS / JS in order to demontrate this.

![image](https://user-images.githubusercontent.com/79663457/134006691-59181b2a-c551-4770-845a-37adde06f7bf.png)


This is a very interesting exercise I've completed in the FreeCodeCamp Javascript Algorithms and Data Structures course. It involves creating a function that converts a given number to a roman numeral. This is challenging not because the coding is difficult, but rather because the logic of the conversion can be very tricky. 

In my solution to this exercise, I have followed this logic:

  1. From the following table, find the highest decimal value v that is less than or equal to the decimal number x
  and its corresponding roman numeral n:

  ![image](https://user-images.githubusercontent.com/79663457/134008339-c1b6607c-9463-4940-bdc9-3c7c65a09870.png)

  2. Write the roman numeral n that you found and subtract its value v from x:
  
    x = x - v

  3. Repeat stages 1 and 2 until you get zero result of x.
  
  ### Example: X = 36

| Iteration #  | Decimal number (x) | Highest decimal value (v)	|  Highest roman numeral (n)	| Temporary result |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| 1	| 36	| 10	| X	| X |
| 2	| 26	| 10	| X	| XX |
| 3	| 16	| 10	| X	| XXX |
| 4	| 6	|  5	| V	| XXXV |
| 5	| 1	|  1	| I	| XXXVI |
   

  4. Fix the generated number to replace values repeated over 3 times by the appopriate roman numerals, making the result in proper accordance with the writing standards. Ex:      replaces "IIII" by "IV", "VIIII" by "IX" and so forth. 


This may not be the most efficient solution to this problem yet. But it has really put my brain to work!
