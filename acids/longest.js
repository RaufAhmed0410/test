let obj = [
    {
        prod_image: "acids/img/longest/Danyang–Kunshan Grand Bridge (China).jfif",
        prod_name: "Danyang–Kunshan Grand Bridge (China)",
        prod_desc: "Holds the Guinness World Record for the longest bridge in the world; part of the Beijing–Shanghai High-Speed Railway.",
        prod_botton: "",
    },
    {
        prod_image: "acids/img/longest/Changhua–Kaohsiung-Viaduct.png",
        prod_name: "Changhua–Kaohsiung Viaduct (Taiwan)",
        prod_desc: "Built for Taiwan High-Speed Rail; designed to withstand earthquakes.",
        prod_botton: "",
    },
    {
        prod_image: "acids/img/longest/Cangde Grand Bridge (China).jfif",
        prod_name: "Cangde Grand Bridge (China)",
        prod_desc: "One of the most important viaducts in the world for high-speed trains.",
        prod_botton: "",
    },
    {
        prod_image: "acids/img/longest/Tianjin Grand Bridge (China).jfif",
        prod_name: "Tianjin Grand Bridge (China)",
        prod_desc: "Carries trains on the Beijing–Shanghai High-Speed Railway.",
        prod_botton: "",
    },
    {
        prod_image: "acids/img/longest/Weinan Weihe Grand Bridge (China).jfif",
        prod_name: "Weinan Weihe Grand Bridge (China)",
        prod_desc: "Once the world’s longest bridge before being surpassed by newer Chinese viaducts.",
        prod_botton: "",
    },
    {
        prod_image: "acids/img/longest/Bang Na Expressway (Thailand).jfif",
        prod_name: "Bang Na Expressway (Thailand)",
        prod_desc: "Longest road bridge in the world (until China’s viaducts). Built entirely of concrete and runs over land.",
        prod_botton: "",
    },
    {
        prod_image: "acids/img/longest/Beijing Grand Bridge (China).jfif",
        prod_name: "Beijing Grand Bridge (China)",
        prod_desc: "Carries the Beijing–Shanghai High-Speed Railway, one of the busiest in the world.",
        prod_botton: "",
    },
    {
        prod_image: "acids/img/longest/Lake Pontchartrain Causeway (USA).jfif",
        prod_name: "Lake Pontchartrain Causeway (USA)",
        prod_desc: "Longest continuous bridge over water in the world.",
        prod_botton: "",
    },
    {
        prod_image: "acids/img/longest/Line 1 Wuhan Metro Bridge (China).jfif",
        prod_name: "Line 1 Wuhan Metro Bridge (China)",
        prod_desc: "Part of China’s massive urban transport infrastructure.",
        prod_botton: "",
    },
                                    
]
var a=document.getElementById("cards");
for(var i=0;i<obj.length;i++){
    
a.innerHTML+=`
<div class="col-sm-12 col-md-6 col-lg-4" >
        <div class="card mt-5" >
  <img src="${obj[i].prod_image}" class="card-img-top" id="size" alt="...">
  <div class="card-body">
    <h5 class="card-title">${obj[i].prod_name}</h5>
    <p class="card-text">${obj[i].prod_desc}</p>
    
    <a href="${obj[i].prod_botton}" class="btn btn-dark">Download more deatails</a>
  </div>
</div>
      </div>


`;}