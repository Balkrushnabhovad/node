

// const array =[0,1,2,3,4,5,6,7,8,9]
// var array1= function (array) {
//     let temp=[]


// for(let i=0; i<array.length; i++ )
// {
// if(array[i]%2==0){
// temp.push (array[i])
// }

// }
// return temp
// }
// console.log(array1(array));



// const array =[0,1,2,3,4,5,6,7,8,9]
// var array1= function (array) {
//    const temp =array.map((data)=>{
//     if(data%2==0){
//         return data
//     }
//    })

// return temp 


// }
// console.log(array1(array));


// const arr= ["momos"]
// arr.push("naaz")
// console.log(arr)

// const arr1=[0,1,2,3,4,5,6,7,8,9]
// for (let array in arr1){
//     console.log(arr1)
// }

// const arr2=["naaz", "momina", "momos","reshma","khilare"]
// for (let array of arr2){
//     console.log(arr2)
// }




// const arr=["momos" ,"reshma"]
// const arr1=arr.map((data)=>{

// return data

// })
// console.log(arr1)

// const arr12=arr.forEach((data)=>{
// console.log(data)
// })


// let i = 10 
// const loop=(value)=>{
//     if (i=0, i>10){
//         return
//     }
//     else {
//         console.log(value)
//         i+=1
//         loop(value)
//     }

// }
//  loop("naaz")

// const hobbies=["dancing" ,"drawing", "singing", "travelling"] //slice method
// const copyhobbies=hobbies.slice()
// console.log(copyhobbies)

// const hobbies=["dancing" ,"drawing", "singing", "travelling"]
// const copyhobbies=[...hobbies]  //spread operator
// console.log(copyhobbies)

// const person=(...arg)=>{  ///rest operator
//     return arg

// }
// console.log(person(5,5,5,5,5,4,5,6,5))



// const person={//object di-structuring
//     name: "momos",
//     number:8656
// }
// function printName({name}){
//     console.log(name)
// }
// printName(person)


// const person={  //object d-sturure
//     name: "momos",
//     number:8656
// }
// const {name, number}=person;
// console.log(name, number)


// console.log("hello naaz")
// setTimeout(()=>{
//     console.log("set time out function" )
// } ,2000)
// console.log("hieee naaz")



// console.log("hello naaz")

// const res =setTimeout(()=>
// {
//     console.log({video:"ytvideo"})
// } ,2000)
// console.log(res.video)


const ytube=new Promise((resolve, reject) => {
    setTimeout(()=>{
        //resolve("done")
        reject("error")
    },2000)
})
ytube.then((text)=>
console.log(text)).catch((err)=>console.log(err))
console.log("hiee")


