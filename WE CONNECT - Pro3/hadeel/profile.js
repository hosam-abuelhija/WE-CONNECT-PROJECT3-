
window.addEventListener('load', function() {
    displayUserInfo();
    displayProfileImage();
    // document.querySelector("hrname").textContent = userInfo.fullName;
    // const hrname = document.querySelector('hrname').textContent = userInfo.fullName;
});

function displayUserInfo() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    
    if (userInfo) {
        document.querySelector('.username h2').textContent = userInfo.fullName;
        
        //info table
        const profileInfoTable = document.getElementById('profileInfoTable');
        profileInfoTable.innerHTML = '';
        for (const [key, value] of Object.entries(userInfo)) {
            const row = document.createElement('tr');
            row.innerHTML = `<th>${key.charAt(0).toUpperCase() + key.slice(1)}</th><td>${value}</td>`;
            profileInfoTable.appendChild(row);
        }
    }
}

function displayProfileImage() {
    
    //profileimage من داخل ال obj
    const image = localStorage.getItem('profileImage');
    if (image) {
        document.getElementById('image').src = image;
    }
}

document.getElementById("logout").addEventListener('click', function() {
    // localStorage.removeItem('userInfo');
    window.location.href = 'index.html';
});