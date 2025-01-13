// selection
// aceesing the element by id and class and any chaning the style of the element

// css change of the element
// var a=document.querySelector("#home");
// a.style.color="green";
// a.style.fontSize="90px";

// html change of the element
// a.innerHTML="<b><i>Home</i></b>";

// a.textContent="Homemo";

// adding listener
// a.addEventListener("mouseenter",function(){
//     a.style.color="red";
  
// });
// a.addEventListener("click",function(){
//     alert("mouse leave");
  
// });
var arr=[
    {name:"Petals of roses",Image:"https://images.unsplash.com/photo-1495231916356-a86217efff12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9zZXxlbnwwfHwwfHx8MA%3D%3D",price:100},
  
    {name:"yellow image",Image:"https://media.istockphoto.com/id/1362781356/photo/artificial-flower-bokeh-with-standy-to-decoration-purpose.webp?a=1&b=1&s=612x612&w=0&k=20&c=nUQEVTDuUhpicPKYs9RIUdDubTAlSnym7xY4jkTbhEc=",price:300},
    {name:"pink rose",Image:"https://media.istockphoto.com/id/695586240/photo/rosebush.webp?a=1&b=1&s=612x612&w=0&k=20&c=1NHn2ZiQ7OPt6ajThvGG9vYlLOz5Y2lpx-4ZHSwNB7E=",price:400},
    {name:"ball image",Image:"https://plus.unsplash.com/premium_photo-1709589145461-4797b4e80e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price:600},

    {name:"car",Image:"https://images.unsplash.com/photo-1486326658981-ed68abe5868e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",price:1000},
    {name:"dog",Image:"https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fHww",price:1000},
    {name:"camle",Image:"https://media.istockphoto.com/id/1070151038/photo/curious-camel-in-desert.webp?a=1&b=1&s=612x612&w=0&k=20&c=v1H-P4-dfCpu163F7R4YRSr06B52vLlXiicHgSNOrFc=",price:1000},
    {name:"pizza",Image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDA%3D",price:1000},
    {name:"pen",Image:"https://plus.unsplash.com/premium_photo-1679826780158-bef9a5b575b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVufGVufDB8fDB8fHww",price:1000},
    {name:"sea",Image:"https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VhfGVufDB8fDB8fHww",price:1000},
];

function show(){
    var clutter="";
    arr.forEach(function(value){
    clutter+=` <div class="box">
                    <img class="cursor-pointer" src="${value.Image}" alt="">
                    <div class="caption"></div>
                </div>`;}
    );
    document.querySelector(".container").innerHTML=clutter;

            }

function search(){
        var input=document.querySelector("#searchinput");
        input.addEventListener("focus",function(){

        document.querySelector(".overlay").style.display="block";
    
        
    })

    input.addEventListener("blur",function(){

    document.querySelector(".overlay").style.display="none";
    
        
    })

    input.addEventListener("input",function(){

        const filteredArray = arr.filter(value => value.name.toLowerCase().startsWith(input.value));
        var clutter="";
        filteredArray.forEach(function(value){
            clutter+=`  <div class="res flex px-8 py-3">
                            <i class="ri-search-line font-semibold mr-5 text-zinc-500"></i>
                            <h3 class="front-semibold ">${value.name}</h3>
                            </div>`;
                        })

                        document.querySelector(".searchdata").style.display="block";
                        document.querySelector(".searchdata").innerHTML=clutter;
        });

        



}

show();
search();

