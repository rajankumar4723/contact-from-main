function validateForm() {
    const form = document.getElementById("contactForm");
    const inputs = form.querySelectorAll("input, textarea");
    const errorMessage = document.getElementById("errorMessage");
    let isValid = true;

    // Clear all error classes
    inputs.forEach((input) => {
        input.classList.remove("error");
        const errorSpan = input.nextElementSibling;
        if (errorSpan && errorSpan.classList.contains("error-message")) {
            errorSpan.classList.remove("visible");
        }
    });

    // Validate each input and textarea
    inputs.forEach((input) => {
        if (!input.checkValidity()) {
            input.classList.add("error");
            const errorSpan = input.nextElementSibling;
            if (errorSpan && errorSpan.classList.contains("error-message")) {
                errorSpan.classList.add("visible");
            }
            isValid = false;
        }
    });

    // Check radio buttons
    const radios = form.querySelectorAll('input[name="query"]');
    const isSelected = Array.from(radios).some((radio) => radio.checked);
    if (!isSelected) {
        errorMessage.classList.add("visible");
        isValid = false;
    } else {
        errorMessage.classList.remove("visible");
    }

    // Final validation
    if (isValid) {
        // alert("Form submitted successfully!");
        myFunction()
    }
}


function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }