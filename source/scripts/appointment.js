function validateAppointmentDate() {
    // Get the selected date from the input element
    var selectedDate = new Date(document.querySelector('input[name="Appointment Date"]').value);
    
    // Get today's date without the time component
    var today = new Date();
    today.setHours(0, 0, 0, 0); // Set the time to midnight to ignore any time differences
    
    // Compare the selected date with today's date
    if (selectedDate.getTime() < today.getTime()) {
        alert("Please select a date that is not earlier than today's date.");
        
        return false; // Cancel the form submission
    } else {
      return true;
    }
  }
  function showOther() {
    var otherOption = document.getElementById("subject").value;
    var otherField = document.getElementById("other-field");
    if (otherOption === "other") {
      otherField.style.display = "block";
    } else {
      otherField.style.display = "none";
    }
  }