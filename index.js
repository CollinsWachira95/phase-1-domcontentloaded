// Your code goes here
// Function to update text content on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the <p> element and change its text content
    const pElement = document.querySelector('p');
    if (pElement) {
        pElement.textContent = "This is really cool!";
    }
});
