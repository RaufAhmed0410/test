var a=document.getElementById("index");
a.innerHTML=`


<section  class="gallery">
<h2  class="gallery "style="margin-bottom:12px">𝓖𝓪𝓵𝓵𝓮𝓻𝔂</h2>
<div class="gallery-grid">
<div class="gallery-item"><img src="acids/img/about-us1.png" alt="Bridge photo 1"></div>
<div class="gallery-item"><img src="acids/img/highest-bridges/Yavuz Sultan Selim Bridge.jfif" alt="Bridge photo 2"></div>
<div class="gallery-item"><img src="acids/img/tallest/Jiujiang Yangtze River Bridge (China).jfif" alt="Bridge photo 3"></div>
<div class="gallery-item"><img src="acids/img/tallest/Great Belt Bridge (Denmark).png" alt="Bridge photo 4"></div>

</div>
</section>


<section id="projects" style="margin-top:12px">
<h2 id="heading" style="margin-bottom:12px">𝓯𝓮𝓪𝓽𝓾𝓻𝓮𝓭 𝓟𝓻𝓸𝓳𝓮𝓬𝓽𝓼</h2>
<div class="projects">
<div class="proj"><img src="acids/img/ffaefb4a-5ee1-4158-8642-f7c2fcc36e5b.png" alt="project1"><h4>Baylink Suspension</h4><div class="tags">USA • 2024</div></div>
<div class="proj"><img src="acids/img/Harbour Expressway Viaduct.png" alt="project2"><h4>Harbour Expressway Viaduct</h4><div class="tags">Singapore • 2022</div></div>
</div>
</section>


<section id="about" class="split">
<div>
<h2 id="heading" >𝓐𝓫𝓸𝓾𝓽 𝓐𝓶𝓪𝔃𝓲𝓷𝓰 𝓑𝓻𝓲𝓭𝓰𝓮𝓼</h2>
<p class="lead">Amazing Bridges is a multi-disciplinary engineering studio focused on designing iconic, safe and cost-effective bridge structures.</p>
<ul style="color:var(--muted);margin-top:12px;line-height:1.6">
<li>Founded: 2010</li>
<li>Offices: London • Istanbul • Karachi</li>
<li>Specialties: Long-span bridges, seismic retrofitting, steel & composite structures</li>
</ul>
</div>
<aside style="background:var(--card);padding:18px;border-radius:12px">
<h3 style="margin-bottom:8px">Quick Contact</h3>
<p style="color:var(--muted);font-size:14px;margin-bottom:12px">Have a project? Tell us the basics and we'll send a feasibility outline.</p>
<form id="contactForm" onsubmit="submitForm(event)">
<div  id="text"style="margin-bottom:8px"><input required name="name" placeholder="Your name" style="width:100%;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit"></div>
<div  id="text" style="margin-bottom:8px"><input required name="email" type="email" placeholder="Email" style="width:100%;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit"></div>
<div id="text" style="margin-bottom:8px"><input name="project" placeholder="Message" style="width:100%;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit"></div>
<button class="btn btn-dark" type="submit" style="width:100%">Send Message</button>
</form>
</aside>
</section>
</main>
`;