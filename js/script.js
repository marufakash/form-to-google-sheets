// finding elements
const scriptURL = 'https://script.google.com/macros/s/AKfycbzNdgowGme679yXvx0g035IMgo_FPOYnhmq7y9gayQBNjicKI6oBaDm-N3kIwOZ-WJTvw/exec';
const form = document.getElementById("form");
const message = document.getElementById("msg");

// Add the listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
  })
  .then((res) => {
    message.textContent = "Thank You For Subscribing!";
    setTimeout(() => {
      message.textContent = ""
    },2000);
    form.reset();
  })
  .catch((err) => console.log(err))
})
