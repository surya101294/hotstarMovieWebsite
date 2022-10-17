import navbar from './components/navbar.js';
console.log('navbar:' , navbar)
let navbar_div=document.getElementById("navbar")
navbar_div.innerHTML=navbar()

import appendMovies from './scripts/append.js'

let carousel_div=document.querySelector("#carousel")
function carousel(){
let images=['https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7390/1367390-h-d7bd9a2457ff','https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/6088/1000216088/1000216088-h','https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/927/1360927-h-375c5733d218' ,'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/966/1310966-h-65f20f5a5e44 ','https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4835/1374835-h-b4b9bc8dfef6','https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1331/641331-h']

let imgElemant = document.createElement("img")

imgElemant.src=images[0];
carousel_div.append(imgElemant)

let i=1

setInterval(function(){
 
    if(i==images.length){
    i=0
    }
    // console.log(i)
//   append image
imgElemant.src=images[i];
carousel_div.append(imgElemant)
    i++
},3000)

}
carousel()
//<--bottom images-->
let movies=[
    {     Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v',
    Title :"Baghi",
    Year: 2017 }  ,
    {     Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v',
    Title :"MS Dhoni",
    Year: 2019 },
    {     Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v',
    Title :"Surper 30",
    Year: 2020 },
    {     Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1529/571529-v',
    Title :"Mission Mangal",
    Year: 2021 },
    {     Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v',
    Title :"Tanha ji",
    Year: 2017 },
    {     Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/1354/1000001354/1000001354-v',
    Title :"Bhag Milka Bhag",
    Year: 2015 },
    {     Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7046/1317046-v-22f4f58b897e',
    Title :"Bahubali",
    Year: 2016 },
    {     Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/2789/1000212789/1000212789-v',
    Title :"Raid",
    Year: 2014 },
    {     Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1327/441327-v',
    Title :"Jungle",
    Year: 2020 },
]

// appendMovies(movies)
document.querySelector("#sortlh").addEventListener("click", sortLH)
document.querySelector("#sorthl").addEventListener("click", sortHL)

function sortLH(){
let data=movies;
data=data.sort((a,b)=>a.Year -b.Year);
appendMovies(data);
console.log(data)
}
function sortHL(){
let data=movies;
data=data.sort((a,b)=>b.Year -a.Year);
appendMovies(data);
console.log(data)
}
//creating dummy loader
// let getmeData= new Promise(function (resolve,reject){
// setTimeout(function(){
// let data=movies;
// if(data!=null){
//     resolve(data); //return data
// }
// else{
//     reject("ERR: Server could not get movies data");
// }
// }, 2000);
// })
// console.log("getmeData :", getmeData)

// getmeData.then(function(success){  //ladder of dependency, 3000ms->resolve->then->append movie
// console.log('success', success)
// appendMovies(success)
// })
// .catch(function(error){
// console.log('error',error)
// });

// promise using async and await method
async function f(){
    let promise= new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            let data=movies;
            if(data!=null)
            resolve(data)
        },2000)
    })
    let result= await promise
    // alert(result);
    appendMovies(result)
    
}
f()
// // for search 

// import navbar from './components/navbar.js';
// console.log(navbar)
// let navbar_div=document.querySelector("#navbar")
// navbar_div.innerHTML=navbar()

// import appendMovies from './scripts/append.js'

// async function searchMovies(){
//     let loader_div=document.getElementById("loader")
//     loader_div.style.display="block";
//     let movie_name=document.getElementById("movie_name").value
//     // console.log(movie_name)

//     try{
//     let response=await fetch(`https://www.omdbapi.com/?apikey=f3d5c71f&s=${movie_name}&page=2`);
    
//     let data=await response.json()
//     console.log('data:', data)
//     let actual_data=data.Search;
//     // console.log('actual data :', "data.search", actual_data)
//     appendMovies(actual_data)
    
//     }
//     catch(err){
//         console.log('err:' , err)
//     }
// }


// let id;
// function debounce(func ,delay){

//     if(id){
//         clearTimeout(id)
//     }
//      id= setTimeout(function (){
//         func()
//     }, delay);
// }
// //debounce will not work since written inside HTML and JS becomes module now

// let input_box=document.getElementById('movie_name')
// input_box.addEventListener('input',function(){
//     debounce(searchMovies,1000);
// });

// let search_div=document.getElementById("rightnav");
// search_div.style.display='none';