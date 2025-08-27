//Lets start with loops:-

/* There are mainly 5 loops in js:

 1) For loop :- A treditional one. When we know where to end.
 2) While Loop:- When we don't know where to end.
 3) Do While Loop:- When we need the code to run at least 1 time. Even it doesn't meet the condtion.
 4) For in Loop :- So it work on Object, Not recommanded for array because it give index with type of string not values.
    so whenever we use for in loop it provide us index not values to access values in array we need to do like arr[index]

   Example for array in for in loop: here we can use this for in loop to iterate through each elements but it give access to index not value directy for of loop better fits in array.
    const arr = [2, 5, 6, 7, 3, 2];

    for (const index in arr) {
    console.log(index);
     }

    Output: 0
            1
            2
            3
            4
            5

  Example for object in for in loop: here we get acces to properties not direct keys and in for in loop obj is itratable but in for of loop it's not because that gives directly access to value not properties or index..

   const obj = {
              a: "valA",
              b: "ValB",
              c: "ValC",
            };

    for (const prop in obj) {
        console.log(prop);
        console.log(obj[prop]);
     }

     output: a
             valA
             b
             ValB
             c
             ValC



 5) For of loop: 


Example of For of loop in array: 

        const arr = [2, 3, 4, 5, 6];

        for (const val of arr) {
           console.log(val);
        }

        Output: 2
                3
                4
                5
                6



       const obj = {
              a: "valA",
              b: "ValB",
              c: "ValC",
            };

        for (const val of obj) {
           console.log(val);
        }

        Output: Object is not iteratable.

    Note: Use for in loop when we need key or index works well on : Object.
          Use for of loop when we need values not index. Works well on : Array, set, map... doesn't work on object without obj.key or entries.
 */
