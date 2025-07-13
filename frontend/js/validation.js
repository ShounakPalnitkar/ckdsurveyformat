function validateForm() {
    const form = document.getElementById('feedbackForm');
    let isValid = true;

    // Validate required fields
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });

    return isValid;
}

// Initialize validation
document.getElementById('feedbackForm').addEventListener('submit', (e) => {
    if (!validateForm()) {
        e.preventDefault();
        alert('Please fill all required fields');
    }
});
