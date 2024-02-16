var photoSize;

var photoBase64;


// Function to convert image to base64
myFile.addEventListener("change", function () {
  const photoFile = this.files[0]; 

  if (photoFile) {
    getBase64(photoFile);
  }
});


function getBase64(file) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    photoBase64 = reader.result;
  };
  reader.onerror = function (error) {
    console.error("Error converting image to base64:", error);
  };
}

//Show error message 
var errorMessage = (element, message) => {
  // console.log(element,message,"ERROR")
  const input = element.parentElement;
  const messageSent = input.querySelector(".error");
  messageSent.innerText = message;
};

//Show success message 
var successMessage = (element) => {
  const input = element.parentElement;
  // console.log(input);
  const messageSent = input.querySelector(".error");

  messageSent.innerText = "Valid";
};

// JavaScript function to toggle password visibility
function togglePasswordVisibility() {
  const passwordInput = document.getElementById("passwordInput");
  const toggleIcon = document.getElementById("togglePassword");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  }
}

//  Validation function for name
function validateName(name) {
  const value = name.value;
  const regex = /^[a-zA-Z\s]+$/;
  if (regex.test(value)) {
    successMessage(name);
    name.style.borderColor = "green";
  } else {
    errorMessage(name, "Please check the name");
    name.style.borderColor = "red";
  }
}

// // Validation function for email
function validateEmail(email) {
  const value = email.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(value)) {
    successMessage(email);
    email.style.borderColor = "green";
  } else {
    errorMessage(email, "Please check the mail");
    email.style.borderColor = "red";
  }
}

// // Validation function for contact number
function validateContactNumber(contactNumber) {
  const value = contactNumber.value;
  const contactNumberRegex = /^[6-9]\d{9}$/;
  if (contactNumberRegex.test(value)) {
    successMessage(contactNumber);
    contactNumber.style.borderColor = "green";
  } else {
    errorMessage(contactNumber, "Enter a valid 10 digit number");
    contactNumber.style.borderColor = "red";
  }
}

// Validation function for Date of Birth
function validateDateOfBirth(dateOfBirthInput) {
  const value = dateOfBirthInput.value;
  const currentYear = new Date(value).getFullYear();

  if (currentYear >= 1950 && currentYear <= 2010) {
    successMessage(dateOfBirthInput);
    dateOfBirthInput.style.borderColor = "green";
  } else {
    errorMessage(
      dateOfBirthInput,
      "Please select a valid year between 1950 and 2010"
    );
    dateOfBirthInput.style.borderColor = "red";
  }
}

// Validation function for Gender
function validateGender(genderDropdown) {
  const selectedGender = genderDropdown.value;

  // if (selectedGender) {
  //   successMessage(genderDropdown);
  // } else {
  //   errorMessage(genderDropdown, "Please select a gender");
  // }
}

//Gender dropdown color changer
genderDropdown.addEventListener("change", (e) => {
  let a = document.getElementById("genderDropdown");

  if (a.value) {
    genderDropdown.style.borderColor = "green";
    genderDropdown.style.color = "green";
  } else {
    genderDropdown.style.borderColor = "red";
    genderDropdown.style.color = "red";
  }
});

//Education dropdown color changer
educationDropdown.addEventListener("change", (e) => {
  let a = document.getElementById("educationDropdown");

  if (a.value) {
    educationDropdown.style.borderColor = "green";
    educationDropdown.style.color = "green";
  } else {
    educationDropdown.style.borderColor = "red";
    educationDropdown.style.color = "red";
  }
});

// Validation function for Password
function validatePassword(passwordInput) {
  const enteredPassword = passwordInput.value.trim(); 

  if (!enteredPassword) {
    document.getElementById("passwordError").innerText =
      "Please enter a password";
    // console.log("wrong password");
    passwordInput.style.borderColor = "red";
    return;
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

  if (passwordRegex.test(enteredPassword)) {
    document.getElementById("passwordError").innerText = "Valid";
    passwordInput.style.borderColor = "green";
  } else {
    document.getElementById("passwordError").innerText =
      "Password must have 8 to 15 characters, at least 1 number, 1 special character, 1 uppercase, and 1 lowercase";
    passwordInput.style.borderColor = "red";
  }
}


//Validation Function for ConfirmPassword
function validateConfirmPassword(confirmPasswordInput) {
  const enteredConfirmPassword = confirmPasswordInput.value.trim(); // Trim to remove leading and trailing whitespaces
  const originalPassword = document.getElementById("passwordInput").value;

  if (!enteredConfirmPassword) {
    errorMessage(confirmPasswordInput, "Please confirm your password");
    confirmPasswordInput.style.borderColor = "red";
    return;
  }

  if (enteredConfirmPassword === originalPassword) {
    successMessage(confirmPasswordInput);
    confirmPasswordInput.style.borderColor = "green";
  } else {
    errorMessage(confirmPasswordInput, "Passwords do not match");
    confirmPasswordInput.style.borderColor = "red";
  }
}

// PAN Number validation function
function validatePanNumber(panNumberInput) {
  const enteredPanNumber = panNumberInput.value;

  const panNumberRegex = /^[A-Z]{5}\d{4}[A-Z]$/;

  if (panNumberRegex.test(enteredPanNumber)) {
    successMessage(panNumberInput);
    panNumberInput.style.borderColor = "green";
  } else {
    errorMessage(panNumberInput, "Not a valid PAN number");
    panNumberInput.style.borderColor = "red";
  }

}

// Validation function for Occupation
function validateOccupation(occupationInput) {
  const enteredOccupation = occupationInput.value;

  const occupationRegex = /^[a-zA-Z\s]*$/;

  if (
    occupationRegex.test(enteredOccupation) ||
    enteredOccupation.trim() === ""
  ) {
    successMessage(occupationInput);
    occupationInput.style.borderColor = "green";
  } else {
    errorMessage(
      occupationInput,
      "Please enter a valid occupation (only letters are allowed)"
    );
    occupationInput.style.borderColor = "red";
  }
}

const photoInput = document.getElementById("photoInput");

myFile.addEventListener("change", function () {
  const photoFile = this.files[0]; 

  if (photoFile) {
    const imageSizeInBytes = photoFile.size;
    photoSize = imageSizeInBytes;
  }
});

// Photo validation function
function validatePhoto(photoInput) {
  const photoFile = photoInput.files[0];

  if (!photoFile) {
    errorMessage(photoInput, "Please select a photo");
    return;
  }

  const allowedTypes = new Set(["image/jpeg", "image/png"]);
  if (!allowedTypes.has(photoFile.type)) {
    errorMessage(
      photoInput,
      "Invalid file type. Only JPG and PNG are allowed."
    );
    return;
  }

  const maxSize = 2 * 1000 * 1000; 
  if (photoFile.size > maxSize) {
    errorMessage(photoInput, "File size exceeds the limit (2MB).");
    return;
  }

  successMessage(photoInput);
}

// Function to check if local storage is empty
function isLocalStorageEmpty() {
  return localStorage.getItem("formData") === null;
}

// //Function to save data to local storage
function saveDataToLocalStorage(obj) {
  var storedData = JSON.parse(localStorage.getItem("formData")) || [];

  obj.photoBase64 = photoBase64;

  storedData.push(obj);

  const messageSent = document.querySelectorAll(".error");
  // console.log(messageSent.innerText);
  let allValidCheck = true;

  messageSent.forEach((element)=>{
    // console.log(element.innerText);
    if(element.innerText.trim().toLowerCase()!="valid"){
        allValidCheck = false;
        return;
    }
  })

  if(allValidCheck)
  {
    localStorage.setItem("formData",JSON.stringify(storedData));

    alert("Form data saved to local storage!");
  }
  else{
    alert("Enter the valid data!!!");
  }
  
}

userName.addEventListener("input", (e) => {
  const formData = localStorage.formData || [];
  let data = [];
  if (formData.length > 0) {
    data = JSON.parse(formData)?.filter(
      (item) => item.userName == e.target.value
    );
  }
  if (data.length > 0) {
    errorMessage(userName, "Please check the name");
    userName.style.borderColor = "red";
  } else {
    successMessage(userName);
    userName.style.borderColor = "green";
  }
});

document.getElementById("myForm").addEventListener("submit", function (event) {
  //   event.preventDefault();

  let formData = new FormData(event.target);

  let obj = {};

  formData.forEach(function (value, key) {
    obj[key] = value;
  });

  //   let photoInKb = Math.floor(photoSize / 1024);
  //   obj.sizeInKb = photoInKb.toString() + "kb";
  //   let photoInMb = Math.floor(photoInKb / 1024);
  //   obj.sizeInMB = photoInMb.toString().toString() + "mb";
  obj.sizeInKb = photoSize - (photoSize % 1000);
  obj.sizeInMb = photoSize - (photoSize % 1000000);

  // console.log(isLocalStorageEmpty());
  saveDataToLocalStorage(obj);
});

// Function to search data
function searchData(data) {
  let searchedData = data.value.toLowerCase();

  const storedData = JSON.parse(localStorage.getItem("formData")) || [];

  if (/^\d+$/.test(searchedData)) {
    const searchInputInYears = Math.floor(parseInt(searchedData) );

    var searchResults = storedData.filter(function (entry) {
      const birthDateYear = new Date(entry.dateOfBirth).getFullYear();
      const birthDateMonth = new Date(entry.dateOfBirth).getMonth();

      const currentDateYear = new Date().getFullYear();
      const currentDateMonth = new Date().getMonth();

      let days;

      if(currentDateMonth< birthDateMonth )
      {
          days = (currentDateYear - birthDateYear - 1)*365;
          days += (12 - birthDateMonth + currentDateMonth)*30;
      }
      else{
        days = (currentDateYear - birthDateYear)*365;
          days += (currentDateMonth - birthDateMonth)*30;
      }

      return days <= searchInputInYears;
    });

    // console.log(searchResults);
  } else if (/^[a-zA-Z\s]+$/.test(searchedData)) {
    var searchResults = storedData.filter(function (entry) {
      return entry.fullName.toLowerCase().includes(searchedData);
    });

    console.log(searchResults);
  } else if (searchedData.toLowerCase().includes("mb")||searchedData.toLowerCase().includes("kb") || searchedData.toLowerCase().includes("bytes")) {
    var sizeInBytes = 0;
  
    if (searchedData.toLowerCase().endsWith("kb")) {
      
      sizeInBytes = parseFloat(searchedData) * 1000;
    } else if (searchedData.toLowerCase().endsWith("mb")) {
      sizeInBytes = parseFloat(searchedData) * 1000 * 1000;
    }else if (searchedData.toLowerCase().endsWith("bytes")) {
      sizeInBytes = parseFloat(searchedData);
    }
  
    var searchResults = storedData.filter(
      (entry) => entry.sizeInKb <= sizeInBytes 
    );
    
    if(searchResults === null)
    {
      
        var searchResults = storedData.filter(
          (entry) => entry.sizeInKb <= sizeInBytes || entry.sizeInMb <= sizeInBytes
        );
      
      
    }
  }

  // console.log(searchResults);
  displayData(searchResults);
}

//Function to check valid url
function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}


//Function to display the data 
function displayData(results) {
  document.getElementById("marginAdd").classList.add("marginAdd");
  var resultsContainer = document.getElementById("container");
  resultsContainer.innerHTML = "";

  if (results === undefined) {
    document.getElementById("marginAdd").classList.remove("marginAdd");
    console.log(results);
  }

  if (results.length === 0) {
    resultsContainer.innerHTML = "No matching User";
    document.getElementById("marginAdd").classList.remove("marginAdd");
    return;
  }

  results.forEach(function (user) {
    var userDetailsContainer = document.createElement("div");
    userDetailsContainer.classList.add("user-details-container");

    var userDetails = document.createElement("div");
    userDetails.innerHTML =
      "<strong>Name:</strong> " +
      user.fullName +
      "<br><strong>Email:</strong> " +
      user.email +
      "<br><strong>contact number :</strong> " +
      user.phoneNumber +
      "<br><strong>DOB: </strong> " +
      user.dateOfBirth +
      "<br><strong>Gender: </strong> " +
      user.genderDropdown +
      "<br><strong>Education: </strong> " +
      user.educationDropdown;

    if (isValidURL(user.photoBase64)) {
      var imgElement = document.createElement("img");
      imgElement.src = user.photoBase64;
      imgElement.alt = "User Image";
      imgElement.style.maxWidth = "25%";
      imgElement.style.maxHeight = "25%"; 

      userDetailsContainer.appendChild(imgElement);
    }

    userDetailsContainer.appendChild(userDetails);
    resultsContainer.appendChild(userDetailsContainer);
  });
}
