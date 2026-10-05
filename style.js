// functions and its type
function name(){

    console.log("hello world");
}
name();
// fnc expression jb fnc ko inside a variable likh de 
let fnc = function(){
    console.log("hello kri")

};
fnc(); 
function add(v1,v2){//v1 and v2 are parameters
    console.log(v1+v2); 
}
add(20,39);//20 and 39 are arguments


function add(v1=1,v2=2){//
    console.log(v1+v2);
}
add();//agr hm arguments nhi dete to default value print ho jaegi
function add(...val){//
    console.log(val);
}
add(20,39,34,26,7868,23,7896,43,764,89,342);//jab bhi more arguments ho tb hm ...val use krte h jise hm rest kehte hai aor ye function ke and use hota hai


// return mtlb jaha se aye ho wahi pie dal denge
function abcd (){
    return 12;
}
let val = abcd();
console.log(val);

//pure and impure function
let a = 12;

function abcd(){// isse bahr a ki value mei klo change nhi aya toh  ye pure function hai
console.log("hehbjehuhrj");
}

function hui(){// isse bahr a ki value mei change aya toh ye impure function hai
    a++;
}
//closures(ek aisa function jo return kare ek aor function ko aor return hone wala function hmesha use karega parent function ka koi variable ko)
function closure(){
    let a =14;
    return function(){
        console.log(a);
    }
}
//iife
(function(){
console.log("hello world");
})();




//arrays ---> in js array is a collection of data which can be of any type and can be of any size
let arr =[23,13,464,86,34,13,68,663];
arr[2] =12;
arr.push(121); //array ke last mei value add krdega 
arr.shift(); //array ke first mei value remove krdega
arr.pop(); //array ke last mei value remove krdega
arr.splice(2,3); //array ke 2nd index se 3 value remove krdega
arr.unshift(12); //array ke first mei value add krdega
arr.reverse(); //array ke value ko reverse krdega
console.log(arr);
 arr.forEach(function(val){
console.log(val+5);
 }
 // we use map when we want to create a new array from an existing array by applying a function to each element of the existing array
let arr = arr.map(function(val){
    return val+5;
});
console.log(arr);
let arr = arr.filter(function(val){
    return val>50;
});
console.log(arr); 

//find method is use to find the first element that satisfies the condition 
//some method is use to check if atleast one element satisfies the condition






 //objects
let obj ={
name : "divyansh",
age: 34,
education: "graduation", 
 };
 //how to access object 
//1. obj.name/age/education
//2 obj["name"]
///nesting and deep access(object ke within object ho )


//object destructuring
//object desturctuing ka mtlb h ki hm object ke andar ke value ko directly variable mei store kr skte h for easy accessing


//looping for in
let obj ={
name : "divyansh",
age: 34,
education: "graduation", 
 };
 for(let key in obj){
    console.log(key,obj[key]);//sare keys objects se aa jaenge
 }

 //object.keys() method is use to get all the keys of an object in an array
let obj ={
name : "divyansh",
age: 34,
education: "graduation", 
 };
 let keys = Object.keys(obj);
 console.log(keys);
 

 //document object model(DOM)
 // selecting elements
 let h1 = document.getElementById("h1");
 let h2 = document.getElementsByClassName("h2");
 let h3 = document.getElementsByTagName("h3");

 //mostly used selectors
 let h4 = document.querySelector("#h4");
 let h5 = document.querySelectorAll(".h5"); 

 //dom manipulation
 let h1 =document.querySelector("h1");//element select hua
 h1.innerText="harsh kaise ho";//h1 mei change kia
 h1.innerHTML ="<i>hello divyansh</i>";//ye html add krne meie help krta hai  mei change kia


 //attribute manipulation
 let a = document.querySelector("a");
 a.href = "https://www.google.com";
 a.setAttribute("target","_blank");//ye new tab mei open krne ke liye use hota h
 //create element
 let h2 = document.createElement("h2");
    h2.innerText = "hello ji kaise hoo aap";
    document.body.appendChild(h2); // screen pei lane mei help karega


//styles (js se css change krne ke liye use hota hai)
let h1 = document.querySelector("h1");
h1.style.color = "red";
h1.style.backgroundColor = "black";

//event and event handling
//browser mein page pei kuch bhi hrkt kro event raise hojaygea
let h1 = document.querySelector("h1");
h1.addEventListener("click",function(){//click event ka mtlb h jb h1 pei click hoga tb ye function call hoga
    h1.style.color = "red";
    h1.style.backgroundColor = "black";
})//jb h1 pei koi click krega tb ye function call hoga aor h1 ka color and bgc change hojayega

//removing event
let h1 = document.querySelector("h1");
function dblclick(){
    h1.style.color = "red";
    h1.style.backgroundColor = "black";
}
h1.addEventListener("dblclick",dblclick);
h1.removeEventListener("dblclick",dblclick);//ye event ko remove kr dega    

 
//common events
let input = document.querySelector("input");
input.addEventListener("input", function(){
    console.log(input.value);
});

//change event//ye tb use hota h jb hm input mei value change krke enter press krte h ya input box se bahar click krte h
let input = document.querySelector("input");
input.addEventListener("change", function(){
    console.log(input.value);
});

//keyboard pei jo type kare wo hmare screen pei print hoga
let h1 = document.querySelector("h1");
window.addEventListener("keydown", function(dets){
    if(dets.key === ""){
        console.log("space press hua");
    }
    else{
        h1.textContent = dets.key;
    }
});

//form submit krte waqt reload nahi hoga
let form = document.querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("form submitted");
});
//mouseover event
let h1 = document.querySelector("h1");//mouse ke ane pei ye hoga
h1.addEventListener("mouseover", function(){
    h1.style.color = "red";
    h1.style.backgroundColor = "black";
});
h1.addEventListener("mouseout", function(){//mouse ke htne pei ye hoga
    h1.style.color = "black";
    h1.style.backgroundColor = "white";
});
//mousemove event
let h1 = document.querySelector("h1");
window.addEventListener("mousemove", function(dets){
    h1.textContent = `X: ${dets.x} Y: ${dets.y}`;
});
//div ko move krenge jaha bhi mouse move hoga
let div = document.querySelector("div");
window.addEventListener("mousemove", function(dets){
    div.style.left = dets.x + "px";
    div.style.top = dets.y + "px";
});
//event object
let h1 = document.querySelector("h1");//here e is the event object which contains all the information about the event that occurred
h1.addEventListener("click", function(e){
    console.log(e.target);  
});



//event bubbling and event capturing
let div = document.querySelector("div");
let h1 = document.querySelector("h1");
//(jispe event ayega agar uspar listenerr nahi hua toh hamra event uske parent par lsitener ko call krega ye event bubbling hai)


//event delegation
let div = document.querySelector("div");
div.addEventListener("click", function(e){
    if(e.target.tagName === "BUTTON"){
        console.log("button clicked");
    }   
}) 


//form and form validation
// reading values from textarea
let nm =document.querySelector("#name");
let form = document.querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    if(nm.value.length<=2){
document.querySelector("#error").innerText = "name should be more than 2 characters";
    } 
    else{
        document.querySelector("#error").innerText = "";
    }
    console.log(nm.value);
});

#local storage and session storage
//local storage mei data save hoga browser mei aor tab close hone ke baad bhi data waha rahega
//session storage mei data save hoga browser mei aor tab close hone ke baad data waha se remove ho jaega   
localStorage.setItem("name", "divyansh"); //ye local storage mei data save kr dega
localStorage.getItem("name"); //ye local storage mei data get kr dega
localStorage.removeItem("name"); //ye local storage mei se data remove kr dega

// session storage
sessionStorage.setItem("name", "divyansh"); //ye session storage mei data save kr dega
sessionStorage.getItem("name"); //ye session storage mei data get kr dega
sessionStorage.removeItem("name"); //ye session storage mei se data remove kr dega

// cookies
document.cookie = "name=divyansh; expires=Fri, 31 Dec 2021 23:59:59 GMT; path=/"; //ye cookie create kr de
//part 3 of js by sheryians coding school 


//scope ---created variable and function kaha tk use kr skte ho
// functional scope
function abcd(){
    let a = 12;
    console.log(a);
}

//global scope(pure code mei kahi bhi use ho skta hai)
let a = 12;

//block scope(curly braces mei jo variable create hoga wo sirf usi curly braces mei use hoga)
if(true){
    let a = 12;
    console.log(a);
}



//execution context
//1.memory creation phase
//2.execution phase  



//lexical scope and dynamic scope
//lexical scoping ----ki aap kaha oei physicallly available  ho ye poori tareeke se ddepend krta hai ki aap kya access kr paoge
function abcd(){
    let a = 294;
    function defg(){
        console.log(a);
    }
}

//dynamic scoppig ___kaha se call kr rhe ho ,uske acc hi answer milega


//closures definition and how variables are preserved
function abh(){
    let a = 12;
    return function (){
        console.log(a);// returning function use kare parent function ka koi variable
    };
}


//private counter 
function abja(){
    let c = 0;
    return function (){
        c++;
        console.log(c);
    };
}
abja();


//this keyword  special keyword hai,kyuki iska value and nature change ho jata hai
 
//global scope mei this ki value
console.log(this);//o/p windows ayega

// function mei this ki value
function abcd(){
    console.log(this);
}
abcd();// o/p windows hi hoti hai



//method ke andr this ki value
let obj = {
    name:"divyansh",
    sayname : function(){
        console.log(this);//o/p object hota hai
    },
};

//event handler mei this ki value
document.querySelector("h1")
.addEventListener("click",function(){
    console.log(this);// event listener mei this ki value wahi element hota hai jispe event listener laga hota hai
}); 

//manual binding(function ko call krte waqt hm set kr skte hau kie uske this ki value kya hogi
let obj={
    name: "divyansh",
    age: 26,
};
function abcd (){
    console.log(this.age);
}
abcd.call(obj);//jo bhi obj hm pass krenge call mei wahi value hoajyegi this ki


//apply mei do hi parameter send kr skte hai ,ek toh obj aor dusra array ke form mei
let obj={
    name: "divyansh",
    age: 26,
};
function abcd (a,b,c,d){
    console.log(this,a,b,c,d);
}
abcd.apply(obj,[1,2,3,4])

//bind (ye funstion ko run nhi krta hai,)
let obj={
    name: "divyansh",
    age: 26,
};
function abcd (a,b,c,d){
    console.log(this,a,b,c,d);
}
 let fnc = abcd.bind(obj,1,2,3,4);
fnc();

//synschronus and asynchronus
//koi bhi code js mei line by lien chlta hai js mei prr kae baar aise casse ate hai jahsa pei baad ka code phle chl jata hai aor phle ka code ruka he reh jata hai

console.log("hey1");
console.log("hey2");
setTimeout(() => {
    console.log("hey3");

},2000);
console.log("hey3");
console.log("hey4");

// callback(when a function gets  another function in its parameter )

//callback hell (callback ke andr callback ,not use these days)
//promises
let pr = new Promise(function (res,rej){
setTimeout (() => {
res();
},3000);

});

pr

.then(function (val){
console.log(val);

})

.catch(function(val){
    console.log(val);


});


//fetch api and http basics


