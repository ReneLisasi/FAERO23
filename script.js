// Get the body element
const body = document.body;

// Add a click event listener to the body
body.addEventListener('click', (e) => {
    // Create a fluid circle element
    const fluidClick = document.createElement('div');
    fluidClick.classList.add('fluid-click');
    
    // Set the position of the circle to where the mouse was clicked
    fluidClick.style.left = `${e.clientX}px`;
    fluidClick.style.top = `${e.clientY}px`;
    
    // Append the circle to the body
    body.appendChild(fluidClick);
    
    // Remove the circle after a short delay
    setTimeout(() => {
        fluidClick.remove();
    }, 1000); // You can adjust the duration as needed
});
