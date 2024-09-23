document.getElementById('exampleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const formResult = document.getElementById('formResult');
    formResult.innerHTML = `<h3>Thank you for your submission, ${name}!</h3>
                            <p>Your message: ${message}</p>
                            <p>We will contact you at ${email}.</p>`;
    
    // Optionally, clear the form fields
    document.getElementById('exampleForm').reset();
});
