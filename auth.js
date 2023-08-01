<script>
  // Sign Up Form
  const signupform = document.querySelector('signup-form');
  signupform.addEventListener('submit',(e) => {
    e.preventDefault();

    // Get user input values
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;
    const store = signupForm.querySelector('input[type="text"]').value;

    // Create user with email and password
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Get the newly created user object
        const user = userCredential.user;

        // Update the user's display name
        user.updateProfile({
          displayName: username
        })
        .then(() => {
          // User registration successful
          console.log('User registered successfully.');
          // You can redirect the user to another page or perform any other actions here
        })
        .catch((error) => {
          // Error updating user profile
          console.error('Error updating user profile:', error.message);
        });
      })
      .catch((error) => {
        // Error creating user
        console.error('Error creating user:', error.message);
      });
  });
</script>