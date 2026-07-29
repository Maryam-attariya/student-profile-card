// Get input
let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let emailInput = document.getElementById("email");
let colorInput = document.getElementById("colorName");
let colorPicker = document.getElementById("colorPicker");
let photoInput = document.getElementById("photo");
// popup
let popup = document.getElementById("popup");
let closePopup = document.getElementById("closePopup");

// Get button
let profileBtn = document.getElementById("profileBtn");
let themeBtn = document.getElementById("themeBtn");
let hideBtn = document.getElementById("hideBtn");
let resetBtn = document.getElementById("resetBtn");

// Get card
let card = document.getElementById("card");

let cardPhoto = document.getElementById("cardPhoto");
let photoText = document.getElementById("photoText");
let cardName = document.getElementById("cardName");
let cardName2 = document.getElementById("cardName2");
let cardAge = document.getElementById("cardAge");
let cardEmail = document.getElementById("cardEmail");
let cardColor = document.getElementById("cardColor");

// Photo Upload
photoInput.addEventListener("change", function () {

    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {

            cardPhoto.src = e.target.result;

            cardPhoto.style.display = "block";

            photoText.style.display = "none";

        };

        reader.readAsDataURL(file);
    }

});

// Create Profile
profileBtn.addEventListener("click", function () {

    if (
        nameInput.value === "" ||
        ageInput.value === "" ||
        emailInput.value === "" ||
        colorInput.value === "" ||
        photoInput.files.length === 0
    ) {
        alert("Fill all information");
        return;
    }
    // pop
    popup.style.display = "flex";
    closePopup.addEventListener("click", function(){

    popup.style.display = "none";

});

    // Show Data
    cardName.textContent = nameInput.value;
    cardName2.textContent = nameInput.value;
    cardAge.textContent = ageInput.value;
    cardEmail.textContent = emailInput.value;
    cardColor.textContent = colorInput.value;

    card.style.backgroundColor = colorPicker.value;

});

// Hide / Show Profile
let hidden = false;

hideBtn.addEventListener("click", function () {

    if (hidden === false) {

        card.style.display = "none";

        hideBtn.innerHTML =
            '<i class="fa-solid fa-eye"></i> Show Profile';

        hidden = true;

    } else {

        card.style.display = "block";

        hideBtn.innerHTML =
            '<i class="fa-solid fa-eye-slash"></i> Hide Profile';

        hidden = false;

    }

});

// Change Theme
themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

});

// Reset
resetBtn.addEventListener("click", function () {

    // Clear Inputs
    nameInput.value = "";
    ageInput.value = "";
    emailInput.value = "";
    colorInput.value = "";
    colorPicker.value = "#000000";
    photoInput.value = "";

    // Reset Card
    cardPhoto.src = "";
    cardPhoto.style.display = "none";
    photoText.style.display = "block";

    cardName.textContent = "Student Name";
    cardName2.textContent = "Your Name";
    cardAge.textContent = "Age";
    cardEmail.textContent = "Email";
    cardColor.textContent = "Favorite Color";

    card.style.backgroundColor = "";
    card.style.display = "block";

    hidden = false;

    hideBtn.innerHTML =
        '<i class="fa-solid fa-eye-slash"></i> Hide Profile';

});