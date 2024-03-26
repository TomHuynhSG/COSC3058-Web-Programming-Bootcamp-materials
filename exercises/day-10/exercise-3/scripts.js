document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function(event) {
      let hasError = false;
      let errorMessage = "";
  
      // Check for empty fields

  
      // Validate age

  
      // Validate phone number to be a number

  
      // Validate email (optional)

  
      // If there's an error, prevent form submission and show alert
      if (hasError) {
        alert(errorMessage);
        event.preventDefault();
      }
    }, false);
  });
  