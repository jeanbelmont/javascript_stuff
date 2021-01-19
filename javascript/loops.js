
// get and index in  forOf loop 
// The loop does not offer any syntax to do this,
// but you can combine the destructuring syntax introduced in ES6
// with calling the entries() method on the array:

const x = ['a', 'b', 'c'];
function go() {
   for (let [index, item] of x.entries()) {
      console.log(index, item)
   };
};
go();