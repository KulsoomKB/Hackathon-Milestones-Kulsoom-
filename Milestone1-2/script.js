// Get references to the button and the profile image
var toggleButton = document.getElementById('toggleProfileImage');
var profileImage = document.getElementById('profileImage');
// Add a click event listener to the button
toggleButton.addEventListener('click', function () {
    // Check if the profile image is currently visible
    if (profileImage.style.display === 'none') {
        // Show the profile image
        profileImage.style.display = 'block';
        toggleButton.textContent = 'Hide Profile Image'; // Change button text
    }
    else {
        // Hide the profile image
        profileImage.style.display = 'none';
        toggleButton.textContent = 'Show Profile Image'; // Change button text
    }
});
