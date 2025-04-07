document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const purpose = document.getElementById('purpose').value;
        const message = document.getElementById('message').value;

        // For now, just log the form data (since no integrations are required)
        console.log('Form submitted:', { name, email, purpose, message });

        // Simulate email sending (in a real scenario, this would be handled by a backend)
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });

    // Pre-fill form purpose based on job application clicks
    const applyButtons = document.querySelectorAll('.apply-button');
    applyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const subject = button.getAttribute('data-subject');
            document.getElementById('purpose').value = 'Job Application';
            document.getElementById('message').value = `I am applying for the position: ${subject}`;
        });
    });
});
