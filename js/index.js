function validateForm() {
    // Reset errors
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('agreementError').innerHTML = '';

    let error = 0;

    // Validate name
    let nameInput = document.getElementById('formName');
    if (nameInput.value.trim() === '') {
        document.getElementById('nameError').innerHTML = 'Name is required';
        nameInput.classList.add('_error');
        error++;
    } else {
        nameInput.classList.remove('_error');
    }

    // Validate email
    let emailInput = document.getElementById('formEmail');
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(emailInput.value.trim())) {
        document.getElementById('emailError').innerHTML = 'Invalid email';
        emailInput.classList.add('_error');
        error++;
    } else {
        emailInput.classList.remove('_error');
    }

    // Validate agreement
    let agreementInput = document.getElementById('formAgreement');
    if (!agreementInput.checked) {
        document.getElementById('agreementError').innerHTML = 'You must agree to the terms';
        agreementInput.classList.add('_error');
        error++;
    } else {
        agreementInput.classList.remove('_error');
    }

    if (error === 0) {
        // Form is valid, you can submit it or perform additional actions
        alert('Form submitted successfully!');
    } else {
        // Form has errors, do not submit
        alert('Please fix the errors before submitting');
    }
}



