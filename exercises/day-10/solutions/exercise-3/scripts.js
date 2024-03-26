document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function(event) {
      let hasError = false;
      let errorMessage = "";
  
      // Check for empty fields
      const inputs = form.querySelectorAll('input, select');
      inputs.forEach(input => {
        if (!input.value) {
          errorMessage += `Please fill out the ${input.name} field.\n`;
          hasError = true;
        }
      });
  
      // Validate age
      const age = form.querySelector('#age').value;
      if (age < 16 || age > 90) {
        errorMessage += 'Age must be between 16 and 90.\n';
        hasError = true;
      }
  
      // Validate phone number to be a number
      const phone = form.querySelector('#phone').value;
      if (!phone.match(/^\d+$/)) {
        errorMessage += 'Phone number must be a number.\n';
        hasError = true;
      }
  
      // Validate email
      const email = form.querySelector('#email').value;
      if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        errorMessage += 'Email must be in a proper format.\n';
        hasError = true;
      }
  
      // If there's an error, prevent form submission and show alert
      if (hasError) {
        alert(errorMessage);
        event.preventDefault();
      }
    }, false);
  });
  