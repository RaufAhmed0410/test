var form=document.getElementById("form");
form.innerHTML=`<form id="feedbackForm">
    <h2 id="center">𝓟𝓻𝓸𝓿𝓲𝓭𝓮 𝓨𝓸𝓾𝓻 𝓕𝓮𝓮𝓭𝓫𝓪𝓬𝓴</h2>

    <label for="name">Name:</label>
    <input type="text" id="name">
    <span class="error" id="nameError"></span>

    <br><br>

    <label for="email">Email:</label>
    <input type="text" id="email">
    <span class="error" id="emailError"></span>

    <br><br>

    <label for="message">Your Feedback:</label>
    <textarea id="message" rows="4"></textarea>
    <span class="error" id="msgError"></span>

    <br><br>

    <button type="button" class="btn btn-dark" id="submitBtn">Submit Feedback</button>

    <p id="thanksMessage" style="display:none; color:green; font-weight:bold; margin-top: 10px;">
        ✅ Thank you for your feedback!
    </p>
</form>`;