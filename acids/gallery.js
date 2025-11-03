let obj = [

     {
        prod_image: "acids/img/london-tower-bridges.jfif",
        prod_name: "london -tower- bridges",
    },
    
     
    {
        prod_image: "acids/img/oldest/Tarr Steps (England).jfif",
        prod_name: "Tarr Steps (England)",
    },
       {
        prod_image: "acids/img/highest-bridges/millau viaduct.jfif",
        prod_name: "millau viaduct",
    
    },
       
    {
        prod_image: "acids/img/oldest/Caravan Bridge (Turkey).jpg",
        prod_name: "Caravan Bridge (Turkey)",
    }, {
        prod_image: "acids/img/highest-bridges/Nanpanjiang Bridge Puzhehei.jfif",
        prod_name: "Nanpanjiang Bridge Puzhehe",
    
    }, 
    {
        prod_image: "acids/img/tallest/Akashi Kaikyō Bridge (Japan)",
        prod_name: " Akashi Kaikyō Bridge (Japan)",
       
    },
    {
        prod_image: "acids/img/tallest/Russky Bridge (Russia)",
        prod_name: "Russky Bridge (Russia)",
      
    },
    {
        prod_image: "acids/img/tallest/Xihoumen Bridge (China)",
        prod_name: "Xihoumen Bridge (China)",
      
    },
    {
        prod_image: "acids/img/tallest/Yavuz Sultan Selim Bridge (Turkey)",
        prod_name: "Yavuz Sultan Selim Bridge (Turkey)",
       
    },
    {
    prod_image: "acids/img/licensed-image.jfif",
    prod_name: "Golden Gate Bridge",
   
    
},
    {
        prod_image: "acids/img/tallest/Jiujiang Yangtze River Bridge (China).jfif",
        prod_name: "Jiujiang Yangtze River Bridge (China)",
        
    },
    {
        prod_image: "acids/img/tallest/Hussaini Suspension Bridge (Pakistan).jfif",
        prod_name: "Hussaini Suspension Bridge (Pakistan)",
       
    },
    {
        prod_image: "acids/img/tallest/Great Belt Bridge (Denmark).png",
        prod_name: "Great Belt Bridge (Denmark)",
       
    },
    {
        prod_image: "acids/img/tallest/Sutong Yangtze River Bridge (China).jfif",
        prod_name: "Sutong Yangtze River Bridge (China)",
     
    },

    {
    prod_image: "acids/img/famous-rialto-bridge-small.jpg",
    prod_name: "Rialto Bridge",
   
},
{
    prod_image: "acids/img/famous-sydney-harbor-bridge-small.jpg",
    prod_name: "SydneHy arbor Bridge",
 
    
},
    {
        prod_image: "acids/img/tallest/Donghai Bridge (China)",
        prod_name: "Donghai Bridge (China)",
       
    },
    {
        prod_image: "acids/img/highest-bridges/lugu lake bridge.jpg",
        prod_name: "Lugu Lake Bridge",
    
    },  {
        prod_image: "acids/img/highest-bridges/Xiaowan Lancangjiang Bridge.jfif",
        prod_name: "Xiaowan Lancangjiang Bridge",
    
    }, 
       
    
    
    {
        prod_image: "acids/img/longest/Danyang–Kunshan Grand Bridge (China).jfif",
        prod_name: "Danyang–Kunshan Grand Bridge (China)",
      
    },
    {
        prod_image: "acids/img/longest/Changhua–Kaohsiung-Viaduct.png",
        prod_name: "Changhua–Kaohsiung Viaduct (Taiwan)",
       
    },
    {
        prod_image: "acids/img/longest/Cangde Grand Bridge (China).jfif",
        prod_name: "Cangde Grand Bridge (China)",
       
    },
    {
        prod_image: "acids/img/longest/Tianjin Grand Bridge (China).jfif",
        prod_name: "Tianjin Grand Bridge (China)",
       
    },
    {
        prod_image: "acids/img/longest/Weinan Weihe Grand Bridge (China).jfif",
        prod_name: "Weinan Weihe Grand Bridge (China)",
       
    },
    {
        prod_image: "acids/img/longest/Bang Na Expressway (Thailand).jfif",
        prod_name: "Bang Na Expressway (Thailand)",
        
    },
    {
        prod_image: "acids/img/longest/Beijing Grand Bridge (China).jfif",
        prod_name: "Beijing Grand Bridge (China)",
     
    },
    {
        prod_image: "acids/img/longest/Lake Pontchartrain Causeway (USA).jfif",
        prod_name: "Lake Pontchartrain Causeway (USA)",
      
    },
    {
        prod_image: "acids/img/longest/Line 1 Wuhan Metro Bridge (China).jfif",
        prod_name: "Line 1 Wuhan Metro Bridge (China)",
      
    },{
        prod_image: "acids/img/highest-bridges/sidu river bridges.jfif",
        prod_name: "Sidu River Bridge",
    
    }, 
    {
        prod_image: "acids/img/highest-bridges/HuajianBridgegGrandCanyon.jfif",
        prod_name: "HuajianBridgeg Grand Canyon",
        
    
    }, {
        prod_image: "acids/img/highest-bridges/Tianmen Bridge.jfif",
        prod_name: "Tianmen Bridge",
    
    }, {
        prod_image: "acids/img/highest-bridges/Duge (Beipanjiang) Bridge.jfif",
        prod_name: "Duge (Beipanjiang) Bridge",
    
    },
    {
        prod_image: "acids/img/oldest/Mycenaean Bridge at Kazarma (Greece)",
        prod_name: "Mycenaean Bridge at Kazarma (Greece)",

    },
    {
        prod_image: "acids/img/oldest/Ponte di Pons Fabricius (Italy).jfif",
        prod_name: "Ponte di Pons Fabricius (Italy)",
    
    },
    {
        prod_image: "acids/img/oldest/Ponte Sant’Angelo (Italy).jfif",
        prod_name: "Ponte Sant’Angelo (Italy)",
    
    },
    {
        prod_image: "acids/img/oldest/Alcántara Bridge (Spain).jfif",
        prod_name: "Alcántara Bridge (Spain)",
    },
    {
        prod_image: "acids/img/oldest/Bridge of Arta (Greece).jfif",
        prod_name: "Bridge of Arta (Greece)",
    
    },
    {
        prod_image: "acids/img/oldest/Ponte Vecchio (Italy).jfif",
        prod_name: "Ponte Vecchio (Italy)",
        
    },
    {
        prod_image: "acids/img/oldest/Anji Bridge (Zhaozhou Bridge, China).jfif",
        prod_name: "Anji Bridge (Zhaozhou Bridge, China)",
    
    },
                                    
]
var a=document.getElementById("cards");
for(var i=0;i<obj.length;i++){
    
a.innerHTML+=`
<div class="col-sm-6 col-md-4 col-lg-3" >
        <div class="card mt-5" >
  <img src="${obj[i].prod_image}" class="card-img-top" id="size" alt="...">
  <div class="card-body">
    <h5 class="card-title">${obj[i].prod_name}</h5>
   
  </div>
</div>
      </div>


`;}