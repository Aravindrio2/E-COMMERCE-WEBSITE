// JavaScript code for product search functionality

document.addEventListener("DOMContentLoaded", () => {
    // Get the search input and the product containers
    const searchInput = document.getElementById("search");
    const productContainers = document.querySelectorAll(".most-wanted-container");

    // Add an event listener to the search input
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase(); // Convert search query to lowercase

        productContainers.forEach(container => {
            // Find the product name within the container
            const productName = container.querySelector(".sale-overlay").textContent.toLowerCase();

            // Check if the product name includes the search query
            if (productName.includes(query)) {
                container.style.display = ""; // Show the container
            } else {
                container.style.display = "none"; // Hide the container
            }
        });
    });
});
