const arr=[120,60,899].reduce((t,s)=>t+s,0);
console.log(arr);

const student=[{name:"Absar",mark:50},{name:"Dinesh",mark:70},{name:"Siva",mark:100},{name:"Jaahid",mark:80},{name:"Shyam",mark:110},{name:"Alwin",mark:90},{name:"Venkat",mark:80},{name:"Bhuvan",mark:70},{name:"Kevin",mark:80},{name:"Navas",mark:85}];
if(student.find((s)=>s.name=="Absar")){
    console.log("FOUND");
}else{
console.log("NOT FOUND");
}

const makeGreet= (greet)=>(name)=>{
    return greet + ""+name}
console.log(makeGreet("Hello")("Asha"))


async function loadusers(){
try{
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const users=await res.json();
    const reult=users.map((x)=>x.name)
    console.log(reult);
    console.log(users);


}catch(error){
    console.log("Couldn't load");
}
}
loadusers();