
window.addEventListener('load', function() {
    displayProfileImage();
});

document.getElementById('update').addEventListener('click', function() {
    if (validateInputs()) {
        saveUserInfo();
        saveProfileImage(); 
        alert('Profile updated successfully!');
        window.location.href = 'editprofil.html'; 
    }
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateName(name) {
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    return nameRegex.test(name);
}

function validatePhoneNumber(phone) {
    const phoneRegex = /^07\d{8}$/;
    return phoneRegex.test(phone);
}
function validateInputs() {
    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // switch (true) {
    //     case !validateName(fullName) :
    //         alert('Unvalide Name Pleas Enter Your Full Name');
            
    //     case !validateEmail(email) :
    //         alert('unvalide Email');

    //     case !validatePhoneNumber(phone) :
    //         alert('Unvalide PhoneNumber');
    
    // }
    if (!validateName(fullName) ) {
        alert('invalid Name Pleas Enter Your Full Name');
        return false;
    }

    if (!validateEmail(email)) {
        alert('invalid Email');
        return false;
    }

    if (!validatePhoneNumber(phone)) {
        alert('invalid PhoneNumber');
        return false;
    }

    return true;
}

function saveUserInfo() {
    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    const userInfo = {
        fullName: fullName,
        email: email,
        phone: phone,
        address: address
    };

    localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

function saveProfileImage() {
    const imageDataUrl = localStorage.getItem('profileImage');
}

function uploadImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function() {
        const imageDataUrl = reader.result;
        localStorage.setItem('profileImage', imageDataUrl); // Save image data to local storage
        document.getElementById('img').src = imageDataUrl; // بس بعمل ريفيو للصورة
    }
    reader.readAsDataURL(file);
}

document.getElementById('fileid').addEventListener('change', uploadImage);


//لما احمل الصفحة بظهرالي اخر ابديت للصورة

function displayProfileImage() {

    const image = localStorage.getItem('profileImage');
    if (image) {
        document.getElementById('img').src = image;
    }
}

document.getElementById("logout").addEventListener('click', function() {
    // localStorage.removeItem('userInfo');
    window.location.href = 'hrpanel.html';
});