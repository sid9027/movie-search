const select = document.querySelector(".dropdown .default");
const list_c = document.querySelector(".dropdown .list");
const list   = document.querySelector(".dropdown .list ul");
const excluder = document.querySelector(".dropdown .hidden");
const movie = document.querySelector(".dropdown .searchbox input");

list_c.addEventListener("mouseover",function(e){
    list.style.display ="block";
    excluder.style.display ="block";
});
list_c.addEventListener("mouseout",function(){
    list.style.display ="none";
    excluder.style.display ="none";
});
// categ_icon.addEventListener("mouseover",function(){
//     list.style.display ="block";
// });
// categ_icon.addEventListener("mouseout",function(){
//     list.style.display ="none";
// });
select.addEventListener("mouseover",function(){
    list.style.display ="block";
    excluder.style.display ="block";
});
select.addEventListener("mouseout",function(){
    list.style.display ="none";
    excluder.style.display ="none";
});
excluder.addEventListener("mouseover",function(){
    list.style.display ="block";
    excluder.style.display ="block";
});
excluder.addEventListener("mouseout",function(){
    list.style.display ="none";
    excluder.style.display ="none";
});
list.addEventListener("click",function(f){
    if(f.path[1]===list)
    {
    document.querySelector(".dropdown .default .fix").textContent=f.path[0].textContent;
    }
    else if(f.path[2]===list)
    {
        document.querySelector(".dropdown .default .fix").textContent=f.path[1].textContent;
    }
    list.style.display ="none";
    excluder.style.display ="none";
})
function revert(){
    if(!movie.value){
        var l="http://www.google.com/search?q=list of "+select.textContent.trim()+" movies";
        setTimeout(() => window.open(l,'_blank'), 1000);
    }
    else{
        var l="http://www.google.com/search?q=list of "+select.textContent.trim()+" movies named "+movie.value;
        setTimeout(() => window.open(l,'_blank'), 1000);
    }
}


