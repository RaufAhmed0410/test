let obj = [
    {
        prod_image: "acids/img/oldest/Tarr Steps (England).jfif",
        prod_name: "Tarr Steps (England)",
        prod_desc: "A “clapper bridge” made of massive stone slabs across the River Barle.",
        prod_botton: "acids/word/oldest/Tarr_Steps_England_History (1).docx",
    },
    {
        prod_image: "acids/img/oldest/Caravan Bridge (Turkey).jpg",
        prod_name: "Caravan Bridge (Turkey)",
        prod_desc: "Still in use today — considered the oldest functioning bridge in the world.",
        prod_botton: "acids/word/oldest/Caravan_Bridge_Turkey.docx",
    },
    {
        prod_image: "acids/img/oldest/Mycenaean Bridge at Kazarma (Greece)",
        prod_name: "Mycenaean Bridge at Kazarma (Greece)",
        prod_desc: "Another Mycenaean arch bridge, fully preserved and still walkable.",
        prod_botton: "acids/word/oldest/Mycenaean_Bridge_Kazarma.docx",
    },
    {
        prod_image: "acids/img/oldest/Ponte di Pons Fabricius (Italy).jfif",
        prod_name: "Ponte di Pons Fabricius (Italy)",
        prod_desc: "Oldest Roman bridge in Rome still standing and used daily. Connects Tiber Island to the mainland.     ",
        prod_botton: "",
    },
    {
        prod_image: "acids/img/oldest/Ponte Sant’Angelo (Italy).jfif",
        prod_name: "Ponte Sant’Angelo (Italy)",
        prod_desc: "Built by Emperor Hadrian; famous for its statues of angels added in the 17th century",
        prod_botton: "",
    },
    {
        prod_image: "acids/img/oldest/Alcántara Bridge (Spain).jfif",
        prod_name: "Alcántara Bridge (Spain)",
        prod_desc: "Roman stone arch bridge over the Tagus River; inscribed with “To the Emperor Caesar Trajan.",
        prod_botton: "",
    },
    {
        prod_image: "acids/img/oldest/Bridge of Arta (Greece).jfif",
        prod_name: "Bridge of Arta (Greece)",
        prod_desc: "Famous in Greek folklore; the legend says it required a human sacrifice to stand firm.",
        prod_botton: "",
    },
    {
        prod_image: "acids/img/oldest/Ponte Vecchio (Italy).jfif",
        prod_name: "Ponte Vecchio (Italy)",
        prod_desc: "Known for its shops built along the span — jewelers and goldsmiths since the Renaissance.",
        prod_botton: "",
    },
    {
        prod_image: "acids/img/oldest/Anji Bridge (Zhaozhou Bridge, China).jfif",
        prod_name: "Anji Bridge (Zhaozhou Bridge, China)",
        prod_desc: "The oldest open-spandrel segmental arch bridge in the world — still operational after 1,400+ yea",
        prod_botton: "",
    },
                                    
]
var a=document.getElementById("cards");
for(var i=0;i<obj.length;i++){
    
a.innerHTML+=`
<div class="col-sm-12 col-md-6 col-lg-4"  data-aos="zoom-in"s >
        <div class="card mt-5" >
  <img src="${obj[i].prod_image}" class="card-img-top " id="size" alt="...">
  <div class="card-body">
    <h5 class="card-title">${obj[i].prod_name}</h5>
    <p class="card-text">${obj[i].prod_desc}</p>
    
    <a href="${obj[i].prod_botton}" class="btn btn-dark">Download more deatails</a>
  </div>
</div>
      </div>


`;}