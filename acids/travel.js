var a=document.getElementById("travel");
a.innerHTML=`<section class="advertise-section text-center">
    <div class="container">
      <h2  id="heading" class="mb-4 fw-bold">𝓣𝓻𝓪𝓿𝓮𝓵 & 𝓐𝓭𝓿𝓮𝓻𝓽𝓲𝓼𝓮 𝓢𝓮𝓬𝓽𝓲𝓸𝓷</h2>
      <p id="text">Plan your trip to the world's most amazing bridges by bus or flight!</p>

      <div class="row g-4 justify-content-center">
    
        <div class="col-md-5">
          <div class="card advertise-card h-100">
            <img src=" acids/img/download.png" height="200px"
                 class="card-img-top" alt="Bus to Tower Bridge">
            <div class="card-body">
              <h5 class="card-title">Bus Booking</h5>
              <p class="card-text">Take a scenic city bus to visit amazing places.</p>
              <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Bus</button>
            </div>
          </div>
        </div>

      
        <div class="col-md-5">
          <div class="card advertise-card h-100">
            <img src="acids/img/download (1).jfif"  height="200px"
                 class="card-img-top" alt="Flight Booking">
            <div class="card-body">
              <h5 class="card-title">Flight Booking</h5>
              <p class="card-text">Fly over the world's beautiful bridges and enjoy breathtaking views.</p>
              <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Flight</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <div class="modal fade" id="bookingModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Bridge Travel Booking</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="bookingForm">
            <div class="mb-3">
              <label for="name" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="name" placeholder="Enter your name" required />
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="example@gmail.com" required />
            </div>

            
            <div class="mb-3">
              <label for="from" class="form-label">Where From</label>
              <input type="text" class="form-control" id="from" placeholder="Enter your starting location" required />
            </div>

            
            <div class="mb-3">
              <label for="destination" class="form-label">Destination</label>
              <select class="form-select" id="destination" required>
                <option value="">-- Select Destination --</option>
                <option>Golden Gate Bridge, USA</option>
                <option>London Tower Bridge, UK</option>
                <option>Sydney Harbour Bridge, Australia</option>
                <option>Brooklyn Bridge, New York</option>
                <option>Akashi Kaikyō Bridge, Japan</option>
              </select>
            </div>

            <div class="text-end">
              <button type="submit" class="btn btn-warning">Submit</button>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            </div>
          </form>

          <div class="thanks-message mt-3" id="thanksMessage">
            🎉 Thanks for booking! Have a great trip. 🌉
          </div>
        </div>
      </div>
    </div>
  </div>`;