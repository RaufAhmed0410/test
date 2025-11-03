var form=document.getElementById("form");
form.innerHTML=` <div class="container py-5">
  <h2 class="text-center mb-4">𝓒𝓸𝓷𝓽𝓪𝓬𝓽 𝓤𝓼</h2>

  <div class="row">
    
   
    <div class=" col-md-6">
      <form id="contactForm" action="submit_form.php" method="POST">
        
        <div class="mb-3">
          <label class="form-label">Name:</label>
          <input type="text" id="name" name="name" class="form-control" required>
        </div>

        <div class="mb-3">
          <label  class="form-label" >Email:</label>
          <input type="email" id="email" name="email" class="form-control" required>
        </div>

        <div class="mb-3">
          <label  class="form-label" >Message:</label>
          <textarea id="message" name="user_message" rows="4" class="form-control" required></textarea>
        </div>

        <button type="submit" class="btn btn-dark w-100">Send Message</button>
      </form>

      <p id="thankMessage">✅ Thank you for submission!</p>
    </div>

    <div class="col-md-6">
      <h4 class="text">📍 Our Location</h4>
     
      <iframe 
         id="location"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.303098795105!2d67.14949161059566!3d24.887640877819273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339999415e0c3%3A0x36742eee0fd9c291!2sAptech%20Metro%20Star%20Gate!5e0!3m2!1sen!2s!4v1761331424720!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        width="100%" height="250" style="border-radius:10px;" allowfullscreen>
      </iframe>
    </div>

  </div>

</div>`;