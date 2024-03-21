//Singleton

// object.create

//Object literals

const mysym = Symbol("key1")


const jsuser = {
    name : "Peter",
    age : 21,
  [  mysym] :"mykey1",
    "Full name": "Peter John",
    location: "Bhubaneswar",
    email: "hellopeter.com",
    isloggedin: false,
    lastlogindays : ["monday", "tuesday"]
}


// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser[mysym]);
// console.log(jsuser['Full name']);
// console.log(jsuser.location);



jsuser.email = "peterhenry@gmail.com"
// Object.freeze(jsuser)
jsuser.email="newmail@yahoo.com";
console.log(jsuser);



jsuser.greeting = function() {
    console.log("Hello peter");
    
}


jsuser.greeting2 = function() {
    console.log(`Hello peter, ${this.name}`);
    
}

console.log(jsuser.greeting())
console.log(jsuser.greeting2())


