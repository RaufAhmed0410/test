let obj = [{
    prod_image: "acids/img/highest-bridges/HuajianBridgegGrandCanyon.jfif",
    prod_name: "HuajianBridgeg Grand Canyon",
    prod_desc: "The bridge crosses the Beipan River as it passes through the deep Huajiang Canyon and is the world's highest bridge, measuring 625 metres (2,051 ft) from the ...",
      prod_botton: "acids/word/HIGHEST/Huajiang_Grand_Canyon_Bridge.docx",
},
{
    prod_image: "acids/img/highest-bridges/Duge (Beipanjiang) Bridge.jfif",
    prod_name: "Duge (Beipanjiang) Bridge",
    prod_desc: "The Duge Beipanjiang Bridge is the world's highest bridge, spanning 1,341 meters across a gorge in China at a height of 565 meters above the Beipan River",
      prod_botton: "acids/word/HIGHEST/Duge_Bridge_Beipanjiang.docx",
},
{
    prod_image: "acids/img/highest-bridges/Tianmen Bridge.jfif",
    prod_name: "Tianmen Bridge",
    prod_desc: "The Tianmen Bridge is China's new six-lane steel truss suspension bridge, the world's third highest at 560 meters above the Beipan River canyon",
      prod_botton: "",
},
{
    prod_image: "acids/img/highest-bridges/Xiaowan Lancangjiang Bridge.jfif",
    prod_name: "Xiaowan Lancangjiang Bridge",
    prod_desc: "The Xiaowan Lancangjiang Bridge is 520 meters high, has a 1,575 meter span, and is the second longest high level suspension bridge in the world",
      prod_botton: "",
},
{
    prod_image: "acids/img/highest-bridges/sidu river bridges.jfif",
    prod_name: "Sidu River Bridge",
    prod_desc: " The Sidu River Bridge is a 1,222m suspension bridge in China, formerly the world's highest. ",
      prod_botton: "",
},

{
    prod_image: "acids/img/highest-bridges/lugu lake bridge.jpg",
    prod_name: "Lugu Lake Bridge",
    prod_desc: "The Walking Marriage Bridge at Lugu Lake is a scenic, romantic wooden bridge over a grassy, reed-filled area called Caohai. ",
      prod_botton: "",
},
{
    prod_image: "acids/img/highest-bridges/Yavuz Sultan Selim Bridge.jfif",
    prod_name: "Yavuz Sultan Selim Bridge",
    prod_desc: "The Yavuz Sultan Selim Bridge, also known as the Third Bosphorus Bridge, is a vehicular bridge over the Bosphorus strait, to the north of Istanbul's two older suspension bridges,  ",
      prod_botton: "",
},
{
    prod_image: "acids/img/highest-bridges/millau viaduct.jfif",
    prod_name: "millau viaduct",
    prod_desc: "The Millau Viaduct is a multispan cable-stayed bridge completed in 2004 across the gorge valley of the Tarn near Millau in the Aveyron department in the Occitanie Region, in Southern France",
      prod_botton: "",
},{
    prod_image: "acids/img/highest-bridges/Nanpanjiang Bridge Puzhehei.jfif",
    prod_name: "Nanpanjiang Bridge Puzhehei",
    prod_desc: "The Nanpanjiang Bridge Puzhehei is a major cable-stayed bridge in Yunnan, China, with a main span of 930 meters supported by 385-meter-tall towers, making it the world's tallest bridge tower for its type.",
      prod_botton: "",
},

];

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