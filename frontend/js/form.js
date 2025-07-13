document.getElementById('feedbackForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        easeOfUse: document.querySelector('[name="easeOfUse"]').value,
        // Add other form fields
    };

    try {
        const response = await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        alert(result.message || 'Form submitted successfully!');
    } catch (error) {
        console.error('Error:', error);
        alert('Submission failed. Please try again.');
    }
});
