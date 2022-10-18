const submitBtn = document.getElementById("submitbtn");
const adminEmail = document.getElementById("admin-email");
const adminPass = document.getElementById("admin-pass");
const validEmail = document.getElementById("email-valid");
const validPass = document.getElementById("pass-valid");
const emailValue = "ahmarbilal223344@gmail.com";
const passValue = "ahmarbilal";

// let onLoad = false;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    adminEmail.value.trim() === emailValue &&
    adminPass.value.trim() === passValue
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
    onLoad = false;
  }

  
});

// export default onLoad;

