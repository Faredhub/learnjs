//Array
 const myArr = [1, 2, 3,4,5];
 const myHeros = ["Ironman","Superman"]
 const myArr2 = new Array(1,2,3,4,5)
 console.log(myArr[0]);



//Array methods

// myArr.push(5);
// myArr.push(6);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(3)
//  myArr.shift()


// console.log(myArr.includes(9));
//  console.log(myArr.indexOf(9));


// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);
 



//slice, splice

console.log("A",myArr);

const my1  = myArr.slice(1, 3)

console.log(my1);
console.log("B",myArr);

const my2 = myArr.splice(1, 3)
console.log("c", myArr);
console.log(my2);
