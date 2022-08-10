import React from 'react'

export default function Pbv() {
    function Passbyvalue(a, b) {
        let tmp;
        tmp = b;
        b = a;
        a = tmp;
        console.log(`Inside Pass by value
            function -> a = ${a} b = ${b}`);
    }
    
    let a = 1;
    let b = 2;
    console.log(`Before calling Pass by value
            Function -> a = ${a} b = ${b}`);
    
    Passbyvalue(a, b);
    
    console.log(`After calling Pass by value
        Function -> a =${a} b = ${b}`);
    
    function PassbyReference(obj) {

            // Mutating the origanal object
            obj.c = "GEEKSFORGEEKS";
            console.log(`Inside Pass by
                Reference Function -> obj `);
            console.log(obj);
        }
        let obj = {
            a: 10,
            b: 20
        
        }
        console.log(`Mutating the origanal object -> `)
        console.log(`Before calling Pass By
                Reference Function -> obj`);
        console.log(obj);
        
        PassbyReference(obj)
        console.log(`After calling Pass By
                Reference Function -> obj`);
        console.log(obj);
        
  return (
    <div>
        result
    </div>
  )
}
