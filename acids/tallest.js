let obj = [
    {
        prod_image: "acids/img/tallest/Akashi Kaikyō Bridge (Japan)",
        prod_name: " Akashi Kaikyō Bridge (Japan)",
        prod_desc: "The Akashi Kaikyō Bridge, also known as the Pearl Bridge, has the tallest towers in the world, connecting the Japanese islands of Honshu and Awaji.",
        prod_botton: "acids/word/tallest/Akashi_Kaikyo_Bridge_Japan.docx",
    },
    {
        prod_image: "acids/img/tallest/Russky Bridge (Russia)",
        prod_name: "Russky Bridge (Russia)",
        prod_desc: "The Russky Bridge in Russia has the tallest bridge towers in the world, located on Russky Island in the Sea of Japan. The bridge connects Russky Island to the Russky Strait and is notable for its long span.",
        prod_botton: "acids/word/tallest/Russky_Bridge_Russia (1).docx",
    },
    {
        prod_image: "acids/img/tallest/Xihoumen Bridge (China)",
        prod_name: "Xihoumen Bridge (China)",
        prod_desc: "The Xihoumen Bridge is a stunning suspension bridge that spans the Xihoumen Strait, connecting the islands of Jintang and Cezi in China.",
        prod_botton: "acids/word/tallest/Xihoumen_Bridge_China.docx",
    },
    {
        prod_image: "acids/img/tallest/Yavuz Sultan Selim Bridge (Turkey)",
        prod_name: "Yavuz Sultan Selim Bridge (Turkey)",
        prod_desc: "Also known as the Third Bosphorus Bridge, it spans the Bosphorus Strait, connecting the European and Asian sides of Istanbul.",
        prod_botton: "acids/word/tallest/Yavuz_Sultan_Selim_Bridge_Turkey_with_Image.docx",
    },
    {
        prod_image: "acids/img/tallest/Jiujiang Yangtze River Bridge (China).jfif",
        prod_name: "Jiujiang Yangtze River Bridge (China)",
        prod_desc: "This bridge spans the Yangtze River, one of the longest rivers in the world. It connects the city of Jiujiang to the northern part of Jiangxi Province in China.",
        prod_botton: "acids/word/tallest/Jiujiang_Yangtze_River_Bridge_China.docx",
    },
    {
        prod_image: "acids/img/tallest/Hussaini Suspension Bridge (Pakistan).jfif",
        prod_name: "Hussaini Suspension Bridge (Pakistan)",
        prod_desc: "Located in the Gilgit-Baltistan region of Pakistan, this bridge is considered one of the most dangerous bridges, perched high above the valleys and rivers below.",
        prod_botton: "acids/word/tallest/Hussaini_Suspension_Bridge_Pakistan.docx",
    },
    {
        prod_image: "acids/img/tallest/Great Belt Bridge (Denmark).png",
        prod_name: "Great Belt Bridge (Denmark)",
        prod_desc: "The Great Belt Bridge connects the islands of Zealand and Funen, with its massive towers standing tall above the sea.",
        prod_botton: "acids/word/tallest/Great_Belt_Bridge_Denmark.docx",
    },
    {
        prod_image: "acids/img/tallest/Sutong Yangtze River Bridge (China).jfif",
        prod_name: "Sutong Yangtze River Bridge (China)",
        prod_desc: "This bridge spans the Yangtze River near the city of Suzhou, and at the time of completion, it was one of the longest cable-stayed bridges in the world",
        prod_botton: "",
    },
    {
        prod_image: "acids/img/tallest/Donghai Bridge (China)",
        prod_name: "Donghai Bridge (China)",
        prod_desc: "The Donghai Bridge spans the East China Sea, connecting the city of Shanghai to the offshore Yangshan Deep-Water Port.",
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