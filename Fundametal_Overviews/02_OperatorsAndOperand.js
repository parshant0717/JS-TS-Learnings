/* Lets start with Bitwise operators it helps in DSA as well > important for DSA.

_ Bitwise operator

# first these operators are not used for addition or subtraction these all are behave defirent.
# In binary to add, subtract, multiply or divide any values we use addition only:
  ##for addition we do simply as we do with decimal
  example for addition: add 5 and 9 
  binary of 5 is  101 and binary of 9 is 1001 so
   101
  1001
  ----
  1110  == 14 so for performing addition keep in mind 2 = 10 and 3 = 11  and perform the addition accordinly as if 1+1 = 2 its mean 10 then we consider 0 only and add 1 to the next left value so so on and if 1+1+1 = 3 then we use the binary of 3 so we consider 1 and then we'll add remining 1 to left value and so on.
  
  ##For subtraction 1st we calculate 1s compliment and then 2s compliment and then we add the negative binary value to the other positive value. 

  example to calculate 5 - 2 = ? we do like 5 + (-2) = ?
  the binary of 5 is 101 and binary of 2 is 10.
  1st we calculate the 1s compliment of 2 which will we 01 like inverse the value of 2 binary to calculate 1s compliment.

  then to calculate 2s compliment we do like add 1 to the 1s compliment result:
  01 + 1 = 10 and then add it to 5

  101
  110   here we took 1 at most left side because while doing 1s compliment we invert the values  
  ---
 1011  =  011   = 3   here we ignore 1 which was extra bit as carry forward.

 so like this we calculate subtraction as well.


1. Bitwise AND (&) : We can say it multiples 0 and 1.

Read and understand this defination !important.
The bitwise AND (&) operator returns a number or BigInt whose binary representation has a 1 in each bit position for which the corresponding bits of both operands are 1. 
   example: 0 0 = 0;
   0 1 = 0;
   1 0 = 0;
   1 1 = 1;

it performs only with binary values:

trick for dsa we can use bitwise & like this

Let say 8 is the power of 2 where n = 8

so binary form of 8 is : 1000

n -1 = 8=> 7 0111

example 1 to check power of 2.
8 1000
8-1 = 7 0111

            0000    so n & n-1 ===0  as 8 % 2 === 0.
            n & n-1: it also clear the right most 1 like when even: 6 =  110   so n & n -1 = 100 =  4  so it cancle the right most 1 value in binary.

      function countSetBits(n) {
         let count = 0;
         while (n > 0) {
         n = n & (n - 1); // clear lowest set bit
         console.log(n.toString(2));

         count++;
        }
        return count;
      }

console.log(countSetBits(13));

2) Bitwise OR: In this 0 or 0 =0 and others will be 1.
example: 
    0 0 0 1 1 1
    0 0 1 0 1 0
  = 0 0 1 1 1 1

 


3) Bitwise XOR : In this if both value is same then it'll be 0 and if both value is different then it'll be 1.

example:
   0 0 0 0 1 1 1
   1 0 1 1 0 1 0
   - - - - - - -
   1 0 1 1 1 0 1


3) ones compliment (~) : tilde indicates ones compliment and we already know 1s compliment inverts the values of binary

example: 
 5 binary is  101 and ones compliment of 5 is 010. so in 32bit binary we represent 5 as  00000000000000000000000000000101 and ~ of 5 as  11111111111111111111111111111010


 4) >> right shift: we use this to shift bits to the right.
 example:
 shift 12 to right by 2 position  so we write it like 12 >> 2
 so binary of 12 is 1100 and if we shift it 2 times right then it'll be 0011 = 3.

 5) << left shift: We use this to shift bits to the left.
 example: 
  shift 12 to left by 2 position so we write it like 12 << 2
  so binary of 12 is 1100 and if we shif it 2 times left then it'll be 110000 = 48.

  Note-1: Advantage or trick of left shift << and right shift >> .
       so whenever we shift binary values to right we perform division of 2 with that value 
       example: 5 >> 1  here we consider each result as integer value not float or decimal
       so  101  = 010 => 2. 5/2 = 2.  1 become out of bound so we ignore right most 1 so the result is 2 if we consider it as integer
       same for 10 = 01 so reslut will be 1 only 

       with left shift if we shift left we usually perform multiplication of 2.
       example: 5 << 1 
       so 101 = 1010 => 10. 5*2 = 10 
       and these operations are faster then reguler multiplication or division. 

  Note-2: bitwise operations are always limited to 32 bits.
*/
