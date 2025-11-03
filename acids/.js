
   document.getElementById("submitBtn").addEventListener("click", function(){

    let valid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("msgError").innerHTML = "";

    if(name.length < 3){
        document.getElementById("nameError").innerHTML = "Name must be at least 3 characters";
        valid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        document.getElementById("emailError").innerHTML = "Enter a valid email";
        valid = false;
    }

    if(message.length < 10){
        document.getElementById("msgError").innerHTML = "Feedback must be at least 10 characters";
        valid = false;
    }

    if(valid){
        document.getElementById("thanksMessage").style.display = "block";
        document.getElementById("feedbackForm").reset();
    }
});
document.addEventListener("DOMContentLoaded", () => {

  const contactForm = document.getElementById("contactForm");
  const thankMsg = document.getElementById("thankMessage");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    contactForm.style.display = "none";
    thankMsg.style.display = "block";

    setTimeout(() => {
      contactForm.reset();
      thankMsg.style.display = "none";
      contactForm.style.display = "block";
    }, 2000);
  });
});
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle("open");
  });
});
function submitFeedback(event) {
  event.preventDefault();

  const form = document.getElementById("feedbackForm");

  const name = form.user_name.value.trim();
  const email = form.user_email.value.trim();
  const message = form.user_message.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let error = "";

  if (!name || !email || !message) {
    error = "Sab fields fill karna zaroori hai!";
  } else if (!emailPattern.test(email)) {
    error = "Valid email enter karein!";
  }

  if (error) {
    showMsg(error, "error");
    return;
  }

  showMsg("Feedback submit hogaya ✅ Shukriya!", "success");
  form.reset();
}

function showMsg(text, type) {
  let box = document.getElementById("feedbackMsg");

  if (!box) {
    box = document.createElement("p");
    box.id = "feedbackMsg";
    box.style.marginTop = "10px";
    box.style.fontWeight = "bold";
    box.style.textAlign = "center";
    document.getElementById("feedbackForm").appendChild(box);
  }

  box.textContent = text;
  box.style.color = type === "error" ? "#ff4d4d" : "#29cc7a";
}
 const bookingModal = document.getElementById("bookingModal");

    bookingModal.addEventListener("show.bs.modal", () => {
      document.getElementById("thanksMessage").style.display = "none";
      document.getElementById("bookingForm").style.display = "block";
    });

    document.getElementById("bookingForm").addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("bookingForm").style.display = "none";
      document.getElementById("thanksMessage").style.display = "block";

      setTimeout(() => {
        const modal = bootstrap.Modal.getInstance(document.getElementById("bookingModal"));
        modal.hide();
        document.getElementById("bookingForm").reset();
      }, 2000);
    });