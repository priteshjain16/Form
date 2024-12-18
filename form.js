// Select the form by its ID
const form = document.getElementById("dataForm");

// Listen for form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  // Collect form data into an object
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    // Send the form data as JSON to your Google Apps Script web app
    const response = await fetch("https://script.google.com/macros/s/AKfycbwZveGfZlt03xiMA_vshp4sjGg4KnAU6eyCORo6Rz1EX7ug4Vi0rPkNgFQ4nBM3HbnisQ/exec", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // Alert the user on success
      alert("Form submitted successfully!");
      form.reset(); // Reset the form fields
    } else {
      alert("Error submitting form. Try again.");
    }
  } catch (error) {
    // Handle any errors during submission
    console.error("Error:", error);
    alert("An error occurred. Please try again.");
  }
});
