// console.log("Hello Js");
// const a =12;
// if(a>10){
//   let b =23;
//   a =40
//   console.log("a ="+a);
// }
// console.log("hi,b ="+b);
// function fun(a,b,c = 10){
//   console.log("heee");
//   return a+b+c;

// }
// let data = fun(12,5);
// console.log(data);
// function selectlanguage(language) {
//   let data;
  
//   if (language == 'c') {
//     function cCompiler() {
//       return "C compiler";
//     }
//     data = cCompiler();
//   }
  
//   if (language == 'java') {
//     function javaCompiler() {
//       return "Java Compiler";
//     }
//     data = javaCompiler();
//   }
  
//   return data;
// }

// const result = selectlanguage('c');
// console.log(result);

// selectlanguage(cCompiler);
// console.log(selectlanguage(cCompiler))
// console.dir(document);
// div = document.getElementsByClassName('parent')[0];
// // console.dir(div);
// div.innerHTML="<h2 style=color:red>ABES Engineering College</h2>";
// const h1 = document.createElement("h1");
// h1.innerText ="This is generated by Dom";
// h1.style.backgroundColor='cyan'
// console.log(h1);
// div.appendChild(h1);
// const img=document.createElement('img');
// img.src='abes.jpg';
// div.appendChild(img);
// img.setAttribute("height","200")
// img.setAttribute("width","200")

// const disp =document.getElementById("disp");
// console.dir(disp);
// function getData(){
//   console.log("getdata Called");
//   disp.innerHTML ="<h2>hello</h2>"
//   }
//   btn.addEventListener("click",getData);
const promise=new promise((resolve,reject)=>{
  let a = 12;
  if(a>10){
    resolve("Resolved");
  }
  else{}
    reject("reject");
}


);
promise.then((msg)=>console.log(msg));
.catch((err)=>console.log(err));