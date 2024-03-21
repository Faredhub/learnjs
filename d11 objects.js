// // const tinder = new Object()  single tone object

// const tinder = {}

// tinder.id = "Peter@123"
// tinder.name = "Peter"
// tinder.isloggedin = false

// // console.log(tinder);

// const regularuser  = {
//     email: "JohnDoe@gmail.com",
//     fullname: {
//         username: {
//             firstname: "hellopeter" , 
//             lastname: "henry"
//         }
//     }
// }

// //console.log(regularuser.fullname.username);



// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}

// //const obj3 = {obj1,obj2}

// //const obj3 = Object.assign({},obj1,obj2)


// const obj3 = {...obj1, ...obj2}
// //console.log(obj3);


// const users =  [
//     {
//         id: 1,
//         email: "h@gmail.com"

        
//     }
// ]
// users[0].email
// console.log(tinder);

// console.log(Object.keys(tinder));
// console.log(Object.entries(tinder));
// console.log(Object.values(tinder));


// console.log(tinder.hasOwnProperty('id')); //true or 



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstractur: "Mr.Peter"
}

//course.courseInstractur


const {courseInstractur: Instractur} = course
console.log(Instractur);


// const navbar = ({company}) => {    // for destriuctruing

// }

// navbar(company = "Peter")

// {
//     name: "peter",
//     coursename: "js hindi",
//     price: "free"
// }  