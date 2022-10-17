function appendMovies(data){
    let loader_div=document.getElementById("loader")
    loader_div.style.display="none";
    
    let data_div= document.getElementById("movies");
    data_div.innerHTML=null;
    
    data.forEach(function (el){
        let div=document.createElement("div");
        let p_name=document.createElement("p");
        p_name.innerHTML=`Name: ${el.Title}`;
        let p_release=document.createElement("p");
        p_release.innerHTML=`Release: ${+el.Year}`;
        let img=document.createElement("img");
        img.id="poster";
        img.src=el.Poster;
        div.append(img , p_name, p_release)
        data_div.append(div)
    });
}
export default appendMovies