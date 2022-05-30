const submitEl = document.querySelector(".submit");
const nameEl = document.querySelector(".name");
const mobileNumberEl = document.querySelector(".mobileNumber");

function contactSave() {
  var contactName = nameEl.value;
  var mobileNumber = mobileNumberEl.value;
  console.log(contactName, mobileNumber);
  localStorage.setItem("contactName", contactName);
  localStorage.setItem("mobileNumber", mobileNumber);
}

submitEl.addEventListener("click", contactSave);
