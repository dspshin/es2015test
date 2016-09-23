// default parameter
function add(a, b=1) {
    console.log( a + b );
}
add(1,2); //3
add(1); //2
add(1,null); //1
add(1,undefined); //2

// arrow function
const addOne = (a=1) => { return a+1 };
console.log( addOne() ); // 2

// rest


// spread