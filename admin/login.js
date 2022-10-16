const submitBtn = document.getElementById("submit");
const adminEmail = document.getElementById("admin-email");
const adminPass = document.getElementById("admin-pass");
const validEmail = document.getElementById("email-valid");
const validPass = document.getElementById("pass-valid");
const emailValue = "ahmarbilal223344@gmail.com";
const passValue = "ahmarbilal";
let onLoad = flase;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  if (
    adminEmail.value.trim() === "ahmarbilal223344@gmail.com" &&
    adminPass.value.trim() === "ahmarbilal"
  ) {
    window.location.assign("admin.html");
    onLoad = true;
  } else {
    validEmail.innerText = "invalid email !";
    validEmail.classList.add("invalid-email");
    adminEmail.classList.add("email-input");
    validPass.innerText = "invalid password !";
    validPass.classList.add("invalid-pass");
    adminPass.classList.add("pass-input");
  }
});
