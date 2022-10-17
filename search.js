import navbar from './components/navbar.js';
console.log(navbar)
let navbar_div=document.querySelector("#navbar")
navbar_div.innerHTML=navbar()

import appendMovies from './scripts/append.js'

async function searchMovies(){
    let loader_div=document.getElementById("loader")
    loader_div.style.display="block";
    let movie_name=document.getElementById("movie_name").value
    // console.log(movie_name)

    try{
    let response=await fetch(`https://www.omdbapi.com/?apikey=f3d5c71f&s=${movie_name}&page=2`);
    
    let data=await response.json()
    console.log('data:', data)
    let actual_data=data.Search;
    // console.log('actual data :', "data.search", actual_data)
    appendMovies(actual_data) 
    }
    catch(err){
        console.log('err:' , err)
    }
}
let id;
function debounce(func ,delay){

    if(id){
        clearTimeout(id)
    }
     id= setTimeout(function (){
        func()
    }, delay);
}
//debounce will not work since written inside HTML and JS becomes module now

let input_box=document.getElementById('movie_name')
input_box.addEventListener('input',function(){
    debounce(searchMovies,1000);
});

let search_div=document.getElementById("rightnav");
search_div.style.display='none';