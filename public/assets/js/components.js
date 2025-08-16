// Function to load and include HTML components
function includeHTML() {
  // Get all elements with the include-html attribute
  const elements = document.querySelectorAll("[include-html]");
  
  elements.forEach(function(element) {
    // Get the file to include
    const file = element.getAttribute("include-html");
    
    // Make an HTTP request using the Fetch API
    fetch(file)
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        throw new Error('Network response was not ok.');
      })
      .then(html => {
        // Replace the element's contents with the HTML
        element.innerHTML = html;
        
        // Remove the include-html attribute
        element.removeAttribute("include-html");
      })
      .catch(error => {
        console.error("Error loading component:", error);
        element.innerHTML = "Error loading component";
      });
  });
}

// Run the function when the page loads
document.addEventListener("DOMContentLoaded", includeHTML);
